const fs = require('fs');

const algoliaData = require('./algolia.json');

const baseUrl = "https://rest-data-validator.netlify.app/guide";

const convertedData = algoliaData.map((item) => {
  const newItemUrl = `${baseUrl}${item.url.replace('#', '/')}`;

  return {
    ...item,
    url: newItemUrl,
    hierarchy: {
      lvl0: item.lvl0,
      lvl1: item.lvl1,
      lvl2: null,
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null,
    },
    type: "lvl1",
    _snippetResult: {
      hierarchy: {
        lvl1: {
          value: item.lvl1,
          matchLevel: "full",
        },
      },
    },
    _highlightResult: {
      hierarchy: {
        lvl0: {
          value: item.lvl0,
          matchLevel: "none",
          matchedWords: [],
        },
        lvl1: {
          value: item.lvl1,
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [item.lvl1[0].toLowerCase()],
        },
      },
      hierarchy_camel: [
        {
          lvl0: {
            value: item.lvl0,
            matchLevel: "none",
            matchedWords: [],
          },
          lvl1: {
            value: item.lvl1,
            matchLevel: "full",
            fullyHighlighted: false,
            matchedWords: [item.lvl1[0].toLowerCase()],
          },
        },
      ],
    },
  };
});

// Escribir los datos convertidos de nuevo a un archivo
fs.writeFileSync('convertedData.json', JSON.stringify(convertedData, null, 2));
