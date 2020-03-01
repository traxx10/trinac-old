import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import { Card, Grid, Avatar } from "@material-ui/core";
import _ from "lodash";
import StarRatings from "react-star-ratings";
import styles from "./Reviews.module.scss";

const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 2500;
const chevronWidth = 40;

class Reviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    const { reviews, dimension } = this.props;
    const rating = _.meanBy(reviews, function(review) {
      return review.rating;
    });
    return (
      <div className={styles.Reviews}>
        <div className={styles.HeaderContainer}>
          <div className={styles.StarContainer}>
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              starDimension={"25px"}
              starEmptyColor="#fff"
              // changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
            />
          </div>
          <h1>What our clients are saying!</h1>
        </div>
        <div className={styles.ContentContainer}>
          <Grid className={styles.GridContainer} container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={2} xl={2}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <div className={styles.SelectedReview}>
                <ItemsCarousel
                  infiniteLoop={false}
                  gutter={dimension.width <= 990 ? 24 : 34}
                  activePosition={"center"}
                  chevronWidth={60}
                  disableSwipe={false}
                  alwaysShowChevrons={false}
                  numberOfCards={dimension.width <= 990 ? 1 : 2}
                  slidesToScroll={2}
                  outsideChevron={true}
                  showSlither={true}
                  firstAndLastGutter={true}
                  activeItemIndex={this.state.activeItemIndex}
                  requestToChangeActive={this.onChange}
                >
                  {reviews.map((review, i) => (
                    <Card className={styles.Card}>
                      <div key={i} className={styles.CardInner}>
                        <Avatar
                          alt="Trinac Reviews"
                          className={styles.Avatar}
                          src={require("../../assets/reviews/fiverr.png")}
                        />
                        <div className={styles.CardReview}>
                          <blockquote>
                            <span className={styles.CardReviewSpan}>
                              “{review.review}”
                            </span>
                          </blockquote>

                          <div className={styles.CardDetails}>
                            <blockquote>
                              <span>{review.name}</span> <br />
                            </blockquote>
                          </div>

                          <div className={styles.CardDesignation}>
                            <blockquote>
                              <span>CEO@{review.company}</span> <br />
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </ItemsCarousel>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2} xl={2}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.ReviewsReducer.reviews,
    dimension: state.HomePageReducer.dimension
  };
};

export default connect(mapStateToProps)(Reviews);
