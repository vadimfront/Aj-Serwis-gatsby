const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createSlice, createPage } = actions

  const result = await graphql(`
    query Languages {
      allWp {
        nodes {
          languages {
            code
            slug
          }
        }
      }
    }
  `)

  if (!result) {
    throw new Error("result error")
  }

  const languages = await result.data.allWp.nodes[0].languages

  languages &&
    languages.forEach(language => {
      const slug = language.slug === "uk" ? "/" : `/${language.slug}/`

      createSlice({
        id: `header_${language.slug}`,
        component: path.resolve(`src/components/Header/Header.tsx`),
        alias: `header_${language.slug}`,
        context: {
          lang: `header_menu_${language.slug}`,
        },
      })

      createPage({
        path: slug,
        component: path.resolve(`src/templates/home-page.tsx`),
        context: {
          code: language.code,
          slug: `header_menu_${language.slug}`,
          lang: language.slug,
        },
        slices: {
          header: `header_${language.slug}`,
        },
      })
      createPage({
        path: `${slug}contacts`,
        component: path.resolve(`src/templates/contact-page.tsx`),
        context: {
          lang: language.slug,
        },
        slices: {
          header: `header_${language.slug}`,
        },
      })
    })
}
