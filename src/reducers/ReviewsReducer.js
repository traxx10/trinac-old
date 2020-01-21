import {} from "../actions/types";

const INITIAL_STATE = {
  reviews: [
    {
      review:
        "Ipsum duis eu adipisicing id veniam ex eu commodo anim laboris. Eu aliqua nisi do ullamco commodo laboris occaecat. Eu incididunt fugiat eiusmod duis aliquip labore ut minim ipsum. Non aute sunt aute sint velit est non cillum consectetur.",
      name: "Hello One",
      company: "Aureans",
      rating: 4
    },
    {
      review:
        "Laboris exercitation ipsum labore minim est nulla consectetur esse anim deserunt anim non eu est.",
      name: "Hello Two",
      company: "Aureans Two",
      rating: 4.6
    },
    {
      review:
        "Nostrud sunt proident mollit ea fugiat exercitation mollit elit incididunt nisi cupidatat nostrud laborum.",
      name: "Hello Three",
      company: "Aureans Three",
      rating: 5
    },
    {
      review: "Magna aliquip ullamco dolore do nostrud ad aute do veniam enim.",
      name: "Hello Four",
      company: "Aureans Four",
      rating: 4.8
    },
    {
      review:
        "Ullamco in ex pariatur nulla ea dolore quis adipisicing tempor labore ipsum ullamco velit. Anim mollit proident eu sunt eu sit labore ipsum occaecat magna minim in velit. Mollit.",
      name: "Hello Five",
      company: "Aureans Fiver",
      rating: 5
    },
    {
      review:
        "Aute Lorem tempor do incididunt. Sint est id nisi sit. Proident dolore eiusmod nisi esse irure amet deserunt exercitation sit exercitation consectetur labore.",
      name: "Hello Six",
      company: "Aureans Six",
      rating: 5
    },
    {
      review:
        "Excepteur enim dolore voluptate irure exercitation ea dolor non tempor velit nostrud et commodo. Excepteur magna minim quis magna incididunt veniam est est dolor voluptate.",
      name: "Hello Seven",
      company: "Aureans Seven",
      rating: 5
    },
    {
      review:
        "Aute officia velit pariatur laborum id sit anim occaecat cillum. Nostrud sint cillum fugiat officia id ex do occaecat fugiat.",
      name: "Hello Eight",
      company: "Aureans Eight",
      rating: 4.7
    },
    {
      review:
        "Elit nisi anim ad reprehenderit. Consequat do laboris ipsum officia ut do ipsum. Dolore tempor anim Lorem ad ullamco enim velit ullamco quis incididunt sint elit.",
      name: "Hello Nine",
      company: "Aureans Nine",
      rating: 4.8
    },
    {
      review:
        "Excepteur ad sit eiusmod non pariatur dolore quis minim aliquip ea sunt velit. Occaecat anim excepteur qui qui voluptate cupidatat quis deserunt. ",
      name: "Hello Ten",
      company: "Aureans Ten",
      rating: 5
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
