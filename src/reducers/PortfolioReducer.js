import {} from "../actions/types";

const INITIAL_STATE = {
  portfolio: [
    {
      category: "web",
      title: "trinac",
      url: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
    },
    {
      category: "mobile",
      title: "doormot",
      url: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
    },
    {
      category: "mobile",
      title: "skoolhub",
      url: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
    },
    {
      category: "mobile",
      title: "raajneti",
      url: "https://homepages.cae.wisc.edu/~ece533/images/barbara.png"
    },
    {
      category: "mobile",
      title: "oyespace",
      url: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
    },
    {
      category: "logo",
      title: "doormot logo",
      url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
    },
    {
      category: "logo",
      title: "graphics logo",
      url: "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
    },
    {
      category: "ui/ux",
      title: "trinac",
      url: "https://homepages.cae.wisc.edu/~ece533/images/tulips.png"
    },
    {
      category: "motion",
      title: "trinac",
      url: "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
