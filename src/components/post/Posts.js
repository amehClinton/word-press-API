import React, { useEffect } from "react";
import PostItem from "./PostItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPosts } from "../../actions/postActions";

const Posts = ({ posts, loading, getPosts }) => {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-3'>
        {" "}
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
};

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(Posts);