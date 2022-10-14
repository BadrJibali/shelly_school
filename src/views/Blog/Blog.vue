<template>
<div>
  <FaceAddressSection :address="address" :link="link" />
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-9 pe-lg-5 mt-5">
        <BlogCard class="mb-5 mt-5" :paragraph="blog.note" :blogs="blog" v-for="(blog, index) in recentNewsData" :key="index"/>
        <div class="" v-for="(blog, index) in recentNewsData" :key="index">
          <BlogCardNoImg class="mt-5" v-if="index == '0'" :blogs="blog"/>
        </div>
        <div class="" v-for="(blog, index) in recentNewsData" :key="index">
          <QuotesCard class="mt-5 mb-4" v-if="index == '1'" :blogs="blog"/>
          <QuotesCardNoPrag class="mt-5 mb-4" v-if="index == '2'" :blogs="blog"/>
        </div>
        <ul class="pagination position-relative justify-content-end align-items-center gap-0 mt-4 mb-5">
          <li class="page-item">
            <a class="page-link hover border-0 color" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link hover border-0 color" href="#">1</a></li>
          <li class="page-item"><a class="page-link hover border-0 color" href="#">2</a></li>
          <li class="page-item"><a class="page-link hover border-0 color" href="#">3</a></li>
          <li class="page-item"><a class="page-link hover border-0 color" href="#">...</a></li>
          <li class="page-item">
            <a class="page-link hover border-0 pe-2 color" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
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
import FaceAddressSection from '@/components/FaceAddressSection.vue';
import BlogCard from '@/components/Blog/BlogCard.vue';
import BlogCardNoImg from '@/components/Blog/BlogCardNoImg.vue';
import QuotesCard from '@/components/Blog/QuotesCard.vue';
import QuotesCardNoPrag from '@/components/Blog/QuotesCardNoPrag.vue';
import SearchInput from '@/components/Blog/SearchInput.vue';
import CategoriesBlog from '@/components/Blog/CategoriesBlog.vue';
import LatestPosts from '@/components/Blog/LatestPosts.vue';
import RecentComments from '@/components/Blog/RecentComments.vue';
import ArchivesMonth from '@/components/Blog/ArchivesMonth.vue';
import TagsAll from '@/components/Blog/TagsAll.vue';
import CalendarAll from '@/components/Blog/CalendarAll.vue';
import AddressBox from '@/components/Blog/AddressBox.vue';

export default {
  name: 'blog',
  components: {
    FaceAddressSection,
    BlogCard,
    BlogCardNoImg,
    QuotesCard,
    QuotesCardNoPrag,
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
      address:"Blog",
      link: { linkPage: "Blog"},
      cat: 'Latest Posts',
      rec: 'Recent Comments',
      arch: 'Archives',
    }
  },
  
}
</script>
