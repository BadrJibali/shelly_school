<template>
<div>
  <FaceBlogAddress :link="recentNewsData[0]" />
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-9 pe-lg-4 mt-5">
        <ParagraphSection class="mt-5" :paragraph="recentNewsData[0].pragraph1" />
        <ParagraphSection class="mt-4" :paragraph="recentNewsData[0].pragraph2" />
        <div class="mt-5">
          <div class="row">
            <ParagraphSection class="col-12 col-md-6 col-lg-4" :paragraph="p.prag" v-for="(p, index) in recentNewsData[0].miniPragraph" :key="index" />
          </div>
        </div>
        <div class="mt-5">
          <div class="row">
            <h4>List</h4>
            <PointsText class="col-12 col-lg-6" :points="p.point" v-for="(p, index) in recentNewsData[0].list" :key="index" />
          </div>
        </div>
        <div class="" v-for="(blog, index) in recentNewsData" :key="index">
          <QuotesCard class="mt-5 mb-5" v-if="index == '1'" :blogs="blog"/>
        </div>
        <ParagraphSection class="mt-4" :paragraph="recentNewsData[0].pragraph3" />
        <ParagraphSection class="mt-4 mb-5" :paragraph="recentNewsData[0].pragraph4" />
        <hr>
        <h2 class="mt-5">Comments</h2>
        <CommentsBlog class="mt-4" :comment="recentNewsData[0]" />
        <h2 class="mt-5">Add Comment</h2>
        <AddComment class="mt-4 mb-3" />
      </div>
      <div class="col-12 col-md-12 col-lg-3 mt-5">
        <SearchInput class="mt-5 mb-5" />
        <CategoriesBlog :categories="blogsSideBar.categories" class="mb-3"/>
        <div class="mb-5">
          <AddressBox :address="cat" class="mb-4" />
          <div class="px-4" v-for="(post, index) in blogsSideBar.latestPosts" :key="index">
            <LatestPosts :post="post" class="py-1"/>
          </div>
        </div>
        <div class="mb-5">
          <AddressBox :address="rec" class="mb-4" />
          <div class="px-4" v-for="(recent, index) in blogsSideBar.recentComments" :key="index">
            <RecentComments :recent="recent" class="mb-3"/>
          </div>
        </div>
        <div class="mb-5">
          <AddressBox :address="arch" class="mb-4" />
          <div class="px-4" v-for="(archive, index) in blogsSideBar.archives" :key="index">
            <ArchivesMonth :archives="archive" class="mb-3"/>
          </div>
        </div>
        <div class="mb-5">
          <AddressBox :address="arch" class="mb-4 w-100" />
          <div class="px-4">
            <TagsAll :tags="tag" class="d-inline-block" v-for="(tag, index) in blogsSideBar.tags" :key="index"/>
          </div>
        </div>
        <CalendarAll class="mb-3"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FaceBlogAddress from '@/components/Blog/FaceBlogAddress.vue';
import ParagraphSection from '@/components/Classes/ParagraphSection.vue';
import PointsText from '@/components/PointsText.vue';
import QuotesCard from '@/components/Blog/QuotesCard.vue';
import CommentsBlog from '@/components/Blog/CommentsBlog.vue';
import AddComment from '@/components/Blog/AddComment.vue';
import SearchInput from '@/components/Blog/SearchInput.vue';
import CategoriesBlog from '@/components/Blog/CategoriesBlog.vue';
import LatestPosts from '@/components/Blog/LatestPosts.vue';
import RecentComments from '@/components/Blog/RecentComments.vue';
import ArchivesMonth from '@/components/Blog/ArchivesMonth.vue';
import TagsAll from '@/components/Blog/TagsAll.vue';
import CalendarAll from '@/components/Blog/CalendarAll.vue';
import AddressBox from '@/components/Blog/AddressBox.vue';

export default {
  name: 'blog-single',
  components: {
    FaceBlogAddress,
    ParagraphSection,
    PointsText,
    QuotesCard,
    CommentsBlog,
    AddComment,
    SearchInput,
    CategoriesBlog,
    LatestPosts,
    RecentComments,
    ArchivesMonth,
    TagsAll,
    CalendarAll,
    AddressBox,
  },
  computed: {
    recentNewsData() {
      return this.$store.state.blogs;
    },

    blogsSideBar() {
      return this.$store.state.blogsSideBar;
    },
  },

  data() {
    return {
      cat: 'Latest Posts',
      rec: 'Recent Comments',
      arch: 'Archives',
    }
  },
  
}
</script>

<style lang="scss" scoped>

</style>