import {} from "../actions/types";

const INITIAL_STATE = {
  portfolio: [
    {
      category: "logo",
      title: "buzz mi grip",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fgraphics%2FBuzzMi-logo-SHADOW.jpg?alt=media&token=d2c5a8bb-5293-4f49-a2a6-e3006628eb94"
    },
    {
      category: "mobile",
      title: "raajneti",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Fraajneti.png?alt=media&token=699e4e0a-7a68-416d-aef3-d1ee38040675",
      appUrl:
        "https://play.google.com/store/apps/details?id=com.aureans.raajneeti"
    },

    {
      category: "web",
      title: "tshirtexpert",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fweb%2Fscreencapture-tshirtexpert-co-uk-2020-02-17-11_08_09.png?alt=media&token=9f0b8997-ad20-4b5d-9ad3-dd762edf8653",
      appUrl: "https://tshirtexpert.co.uk/"
    },
    {
      category: "mobile",
      title: "able",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Fable.png?alt=media&token=020d15b3-0c62-4c4e-aa75-769021d7c327",
      appUrl: "https://play.google.com/store/apps/details?id=com.able"
    },
    {
      category: "logo",
      title: "taras place",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fgraphics%2FTara's-logo-3D.jpg?alt=media&token=8627927a-7429-45d9-9558-ccb42a49797e"
    },
    {
      category: "mobile",
      title: "safwa",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Fsafwa.png?alt=media&token=73e258fd-5504-4c63-8ec1-d0f30dec6122",
      appUrl: "https://play.google.com/store/apps/details?id=reactaz.safwa"
    },
    {
      category: "logo",
      title: "Black eye willy",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fgraphics%2F1-Eyed-Willy-1.jpg?alt=media&token=089aaa73-9c2f-4e1a-af83-01b592f0b73d"
    },
    {
      category: "web",
      title: "alchemy",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fweb%2Fscreencapture-alchemy-daostack-io-2020-02-17-11_13_23.png?alt=media&token=bfcca546-8e4d-4eda-977f-83195233f2b6",
      appUrl: "https://alchemy.daostack.io/"
    },

    {
      category: "ui/ux",
      title: "comfort",
      url:
        "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fui%2FCOMFORT.jpg?alt=media&token=b4e42514-9d48-4161-ba5b-c11b1fe7bfe7"
      // appUrl: "https://tshirtexpert.co.uk/"
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// portfolio: [
//   {
//     category: "mobile",
//     title: "raajneti",
//     url:
//       "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Fraajneti.png?alt=media&token=699e4e0a-7a68-416d-aef3-d1ee38040675",
//     appUrl:
//       "https://play.google.com/store/apps/details?id=com.aureans.raajneeti"
//   },
//   {
//     category: "mobile",
//     title: "able",
//     url:
//       "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Fable.png?alt=media&token=020d15b3-0c62-4c4e-aa75-769021d7c327",
//     appUrl: "https://play.google.com/store/apps/details?id=com.able"
//   },
//   {
//     category: "mobile",
//     title: "safwa",
//     url:
//       "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Fsafwa.png?alt=media&token=73e258fd-5504-4c63-8ec1-d0f30dec6122",
//     appUrl: "https://play.google.com/store/apps/details?id=reactaz.safwa"
//   },
//   // {
//   //   category: "mobile",
//   //   title: "lumlife",
//   //   url: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
//   //   appUrl: "https://itunes.apple.com/us/app/lumlife26/id1421629326"
//   // },
//   // {
//   //   category: "mobile",
//   //   title: "oyespaces",
//   //   url: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
//   // },
//   // {
//   //   category: "mobile",
//   //   title: "oyespace",
//   //   url:
//   //     "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fmobile%2Foyespace.png?alt=media&token=d03b7e5e-75e6-47cf-9804-8a9380de239c",
//   //   appUrl:
//   //     "https://play.google.com/store/apps/details?id=com.oyespace.oyesafe"
//   // },
//   {
//     category: "logo",
//     title: "Black eye willy",
//     url:
//       "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fgraphics%2F1-Eyed-Willy-1.jpg?alt=media&token=089aaa73-9c2f-4e1a-af83-01b592f0b73d"
//   },
//   {
//     category: "logo",
//     title: "buzz mi grip",
//     url:
//       "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fgraphics%2FBuzzMi-logo-SHADOW.jpg?alt=media&token=d2c5a8bb-5293-4f49-a2a6-e3006628eb94"
//   },
//   {
//     category: "logo",
//     title: "taras place",
//     url:
//       "https://firebasestorage.googleapis.com/v0/b/trinacpro.appspot.com/o/portfolio%2Fgraphics%2FTara's-logo-3D.jpg?alt=media&token=8627927a-7429-45d9-9558-ccb42a49797e"
//   }
//   // {
//   //   category: "motion",
//   //   title: "trinac",
//   //   url: "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
//   // }
// ]
