import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumb from "../../components/BreadCrumb";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "components/comments/CommentsContainer";
import SocialShareButton from "components/SocialShareButton";
const breadCrumbData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.post1Image,
    title: "Help children get better education",
    createdAt: "2023-12-26T14:22:44Z",
  },
  {
    _id: "2",
    image: images.post1Image,
    title: "Help children get better education",
    createdAt: "2023-12-26T14:22:44Z",
  },
  {
    _id: "3",
    image: images.post1Image,
    title: "Help children get better education",
    createdAt: "2023-12-26T14:22:44Z",
  },
  {
    _id: "4",
    image: images.post1Image,
    title: "Help children get better education",
    createdAt: "2023-12-26T14:22:44Z",
  },
];

const postTags = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];
const ArticleDetailsPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumb data={breadCrumbData} />
          <img
            src={images.post1Image}
            alt="laptop"
            className="rounded-xl w-full"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto mt-4 inline-block md:text-base"
          >
            EDUCATION{" "}
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-light">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
          <CommentsContainer className="mt-10" logginedUserId="a" />
        </article>
        <div>
          <SuggestedPosts
            className="mt-8 lg:mt-0 lg:max-w-xs"
            header="Latest Article"
            posts={postsData}
            tags={postTags}
          />
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialShareButton
              url={encodeURI(
                "https://moonfo.com/post/client-side-and-server-side-explanation"
              )}
              title={encodeURIComponent(
                "Client-side and Server-side explanation"
              )}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailsPage;
