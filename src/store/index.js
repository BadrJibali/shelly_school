import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //------------------------------( HOME SECTION )----------->>
    // Home Welcome Card Data.
    cards: [
      {
        id: 1,
        icon: 'icon5.png',
        title: 'Awesome Teachers',
        text: 'Vivamus interdum, mauris interdum quis curdum sodales.'
      },
      {
        id: 2,
        icon: 'icon7.png',
        title: 'Global Certificate',
        text: 'Pelleneget tespharetra que fringilla egugue id eget pharetra.'
      },
      {
        id: 3,
        icon: 'icon9.png',
        title: 'Awesome Teachers',
        text: 'Etiam risus neque, volutpat vel laoreet a, finibus volutpat non.'
      },
      {
        id: 4,
        icon: 'icon8.png',
        title: 'Awesome Teachers',
        text: 'Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus.'
      }
    ],

    // Home Welcome Data.
    welcome: {
      school: "Shelly",
      text: "Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus interdum, mauris quis cursus sodales, urn.",
      word:""
    },

    // Home Masonry Gallery Data.
    items: [
      { img: 'gallery1.jpg', class: 'image-1'},
      { img: 'gallery2.jpg', class: 'image-2'},
      { img: 'gallery3.jpg', class: 'image-3'},
      { img: 'gallery4.jpg', class: 'image-4'},
      { img: 'gallery5.jpg', class: 'image-5'},
      { img: 'gallery6.jpg', class: 'image-6'},
      { img: 'gallery7.jpg', class: 'image-7'},
      { img: 'gallery8.jpg', class: 'image-8'},
      { img: 'gallery9.jpg', class: 'image-9'},
      { img: 'gallery10.jpg', class: 'image-10'},
    ],

    // Home address Classes Section Data.
    classes: {
      school: "Our Classes",
      text: "Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus.",
      position: 'address-start',
    },

    // Home classes Data.
    courses: [
      {id: '1', img: 'img1.jpg', name: 'Basic English Speaking and Grammar', time: 'Mon-Fri 10 Am - 12 Am', teacher: 'Sayed Hamdi', prof: 'ico.png', price: '$150'},
      {id: '2', img: 'img2.jpg', name: 'Natural Science & Mathematics Course', time: 'Sat-Tue 8 Pm - 10 Pm', teacher: 'Badr Jibali', prof: 'ico2.png', price: '$80'},
      {id: '3', img: 'img3.jpg', name: 'Environmental Studies & Earth Science', time: 'thu-Fri 7 Am - 8 Am', teacher: 'Abd-Allah Ahmed', prof: 'ico.png', price: '$40'},
      {id: '4', img: 'img4.jpg', name: 'Hospitality & Sport Course', time: 'Mon-Fri 10 Am - 12 Am', teacher: 'Mahmoud Hamdi', prof: 'ico2.png', price: '$90'},
      {id: '5', img: 'img3.jpg', name: 'Hospitality & Sport Course', time: 'Mon-Fri 10 Am - 12 Am', teacher: 'Ali Hamdi', prof: 'ico.png', price: '$700'},
    ],

    // Home address Awesome Teachers Data.
    address: {
      school: "Our Awesome Teachers",
      text: "Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra, bibendum justo eget, lacinia dui. Donec ligula ligula, elementum sit amet.",
      position: 'address-center',
    },

    // Home classes Data.
    teachers: [
      {id: '1', img: 'img5.jpg', name: 'Sayed Hamdi', job: 'Engineer', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '100'}, {id: '2', speaking: '85'}, {id: '3', familySupport: '80'}, {id: '4', childrenWellbeing: '90'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '2', img: 'img6.jpg', name: 'Badr Jibali', job: 'Scientist', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '90'}, {id: '2', speaking: '75'}, {id: '3', familySupport: '85'}, {id: '4', childrenWellbeing: '98'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '3', img: 'img7.jpg', name: 'Abd-Allah Ahmed', job: 'Chemist', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '100'}, {id: '2', speaking: '85'}, {id: '3', familySupport: '80'}, {id: '4', childrenWellbeing: '80'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '4', img: 'img8.jpg', name: 'Ali Hamdi', job: 'Professor', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '100'}, {id: '2', speaking: '85'}, {id: '3', familySupport: '80'}, {id: '4', childrenWellbeing: '93'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '5', img: 'img1.jpg', name: 'Mostafa Hamdi', job: 'Full Stack', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '97'}, {id: '2', speaking: '87'}, {id: '3', familySupport: '80'}, {id: '4', childrenWellbeing: '90'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '6', img: 'img2.jpg', name: 'Mahmoud Elaraby', job: 'Scientist', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '100'}, {id: '2', speaking: '85'}, {id: '3', familySupport: '60'}, {id: '4', childrenWellbeing: '93'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '7', img: 'img3.jpg', name: 'Sayed Hamdi', job: 'Chemist', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '90'}, {id: '2', speaking: '88'}, {id: '3', familySupport: '81'}, {id: '4', childrenWellbeing: '98'},], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
      {id: '8', img: 'img4.jpg', name: 'Badr Mohammed', job: 'Developer', phone: '+201156260918', email: 'badr.jibali@outlook.com', dob: '22.07.1994', education: 'arabic lang of arabic school', experience: '7', personalSkills: [{id: '1', teaching: '100'}, {id: '2', speaking: '85'}, {id: '3', familySupport: '89'}, {id: '4', childrenWellbeing: '80'}], prag1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', prag2: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem',  prag3: 'Pellentesque aliquam varius malesuada. Proin id massa vitae eros elementum egestas id sit amet elit. Praesent convallis ligula ac urna rhoncus euismod. Vestibulum maximus luctus magna, in sollicitudin lorem tincidunt id. Nunc aliquam nibh sagittis nibh luctus blandit. Quisque nec dignissim metus. Suspendisse eget turpis ante. Fusce non iaculis sem'},
    ],

    // Home address Find Courses Section Data.
    findCourses: {
      school: "Find Your Course",
      text: "ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor.",
      position: 'address-start',
    },

    // Home Phone Number In Find Courses Section Data.
    phone: {
      number: '+2011 5626 0918'
    },

    // Home Find Courses Section Data.
    events: [
      {id: '1', date: '22/07/2022', time: '11AM to 12PM', price: 'Free', title: 'Environment Conference', img: 'ico.png', organizer: 'Badr Jibali', address: '43 castle road 517 district' },
      {id: '2', date: '30/06/2022', time: '09AM to 10PM', price: '$15',  title: 'Digital Transformation Conference', img: 'ico.png', organizer: 'sayed Hamdi', address: '69 prebaa road 895 lol' },
      {id: '3', date: '19/12/2022', time: '01PM to 04PM', price: '$70',  title: 'Campus Clean Workshop', img: 'ico.png', organizer: 'Hamada Salah', address: '13 force road 357 zengo' },
      {id: '4', date: '25/09/2022', time: '05PM to 07PM', price: '$90',  title: 'Excel and Elevate Training', img: 'ico.png', organizer: 'Abd-Allah Ahmed', address: '13 force road 357 zengo' },
      {id: '5', date: '08/01/2022', time: '02PM to 04PM', price: '$120', title: 'Practice to Perfect', img: 'ico.png', organizer: 'Mahmoued ElAraby', address: '13 force road 357 zengo' },
      {id: '6', date: '09/11/2022', time: '09PM to 10PM', price: '$80',  title: 'Disruptor Training', img: 'ico.png', organizer: 'ElDeep Else7lawe', address: '13 force road 357 zengo' },
    ],

    // Home address Recent News Section Data.
    recentNews: {
      school: "Recent News",
      text: "Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacusMorbi lorem sem, aliquet.",
      position: 'address-center',
    },

    // Home address Recent News Section Data.
    blogs: [
      {id: '1', job: 'Mother', name: 'Badr Jibali', lang: 'English', date: '22/07/2022', by: 'Admin', teacher: 'Teachers, School', title: 'Campus clean workshop', img: 'blog1.jpg', note: 'Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam maximus interdum. Duis ultrices sapien', pragraph1: 'Donec hendrerit mauris sed tellus consequat, vitae eleifend risus posuere. Fusce vulputate dui ultrices mauris iaculis ultrices. Praesent hendrerit augue non massa efficitur, varius placerat nibh consectetur. Cras maximus semper magna, ut laoreet eros bibendum sit amet. Proin ut posuere neque. Curabitur eget mauris sit amet lorem faucibus lacinia. Duis sapien tellus, aliquam sit amet augue in, feugiat tempus orci', pragraph2: 'Suspendisse feugiat, est sed dapibus eleifend, lectus nisl ullamcorper enim, et ullamcorper mauris ligula ac neque. Ut aliquam justo vitae nisi fermentum malesuada. Duis sem eros, varius vitae velit eu, mollis convallis turpis. Etiam ante nisl, maximus vitae sem non, dignissim tristique tellus. Phasellus at risus nec arcu malesuada aliquet. Pellentesque lacus ipsum, rutrum sit amet rutrum nec, imperdiet eu velit. Integer posuere maximus pulvinar. Integer feugiat mollis neque rhoncus cursus.', pragraph3: 'In ornare et nisi eget tempus. Integer imperdiet sit amet nisi vel elementum. Pellentesque commodo, tellus vel ultricies sodales, eros metus dapibus dolor, in elementum ex turpis ornare nisl. Quisque dictum lorem eros, nec porta tellus aliquet in. Ut id consectetur felis. Praesent tincidunt metus nec tortor fringilla porttitor. Quisque pretium sapien ut mattis commodo.', pragraph4: 'Suspendisse feugiat, est sed dapibus eleifend, lectus nisl ullamcorper enim, et ullamcorper mauris ligula ac neque. Ut aliquam justo vitae nisi fermentum malesuada. Duis sem eros, varius vitae velit eu, mollis convallis turpis. Etiam ante nisl, maximus vitae sem non, dignissim tristique tellus. Phasellus at risus nec arcu malesuada aliquet.', pragraph5: 'Duis a nibh id metus laoreet hendrerit ut non orci. Nam lacinia urna ex, et vestibulum nibh pretium ut. Sed venenatis euismod sapien, vel porta metus consectetur non. Sed suscipit auctor urna quis imperdiet. Mauris libero ex, cursus at semper sit amet, gravida id libero.', miniPragraph: [ {id :'1', prag: 'Suspendisse feugiat, est sed dapibus eleifend, lectus nisl ullamcorper enim, et ullamcorper mauris ligula ac neque'}, {id :'2', prag: 'Quisque nunc tellus, sodales aliquam mauris in, placerat blandit quam. In ornare et nisi eget tempus'}, {id :'3', prag: 'Nullam dui nulla, consequat gravida tellus a, euismod cursus eros. Quisque ut lacus ligula. In sollicitudin dui'}], list: [{id: '1', point: 'Etiam ante nisl, maximus vitae sem non, dignissim'}, {id: '2', point: 'Donec blandit, sapien eu porttitor blandit'}, {id: '3', point: 'Sed at urna at massa viverra feugiat non'}, {id: '4', point: 'Suspendisse feugiat, est sed dapibus eleifend'}, {id: '5', point: 'Donec hendrerit mauris sed tellus consequat'}, {id: '6', point: 'Nullam dui nulla, consequat gravida tellus'}] },
      {id: '2', job: 'Father', name: 'Sayed Hamdi', lang: 'Arabic', date: '30/06/2022', by: 'Moderator', teacher: 'Teachers, School', title: 'Environment Conference', img: 'blog2.jpg', note: 'Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam maximus interdum. Duis ultrices sapien eget metus luctus finibus. Morbi nec lobortis ante, sed condimentum nisl. Nam laoreet ullamcorper magna et fringilla' },
      {id: '3', job: 'Teacher', name: 'Badr Mohammed', lang: 'English', date: '19/12/2022', by: 'Admin', teacher: 'Teachers, School', title: 'Campus Clean Workshop', img: 'blog3.jpg', note: 'Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet' },
    ],

    blogsSideBar: {

      categories: {
        teachers: '45',
        schoolNews: '13',
        lessons: '06',
        shelly: '89',
      },

      latestPosts: [
        { id: '1', img: 'post1.jpg', address:'Duis tempor eros tortor, a ornare', date: '22/07/2022'},
        { id: '2', img: 'post2.jpg', address:'Nam mattis felis id sodales rutrum', date: '28/12/2022'},
        { id: '3', img: 'post3.jpg', address:'Nulla ornare tristique mauris', date: '31/09/2022'},
      ],

      recentComments: [
        { id: '1', by: 'Admin', comment:'Duis tempor eros tortor, a ornare'},
        { id: '2', by: 'Moderator', comment:'in tempor eros tortor, a ornare'},
        { id: '3', by: 'Admin', comment:'Nulla ornare tristique mauris'},
      ],

      archives: [
        { id: '1', month: 'December'},
        { id: '2', month: 'January'},
        { id: '3', month: 'February'},
        { id: '4', month: 'March'},
      ],

      tags: [
        { id: '1', tag: 'Teachers'},
        { id: '2', tag: 'Lessons'},
        { id: '3', tag: 'Shelly'},
        { id: '4', tag: 'School'},
        { id: '5', tag: 'Theme'},
        { id: '6', tag: 'Class'},
      ],

    },

    //------------------------------( ABOUT SECTION )----------->>
    // About Welcome Data.
    welcomeAbout: {
      school: "Shelly",
      text: "Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.",
      img: "abt1.png"
    },

    // About Our Mission Data.
    OurMissionAbout: {
      school: "Our Mission",
      text: "Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum nisl.",
      points: [
        {id: "1", point: "Etiam ante nisl, maximus vitae sem non, dignissim"},
        {id: "2", point: "Donec blandit, sapien eu porttitor blandit"},
        {id: "3", point: "Sed at urna at massa viverra feugiat non"},
      ],
      img: "abt2.png"
    },

    // About Our Benefits Data.
    OurBenefitsAbout: {
      school: "Our Benefits",
      text: "Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum nisl. Vestibulum ut sagittis neque."
    },

    //------------------------------( ABOUT SECTION )----------->> (Event Single Page)

    // Event Single Data.
    eventGallery: [
      {id: "1", img: "event-gallery1.jpg"},
      {id: "2", img: "event-gallery2.jpg"},
      {id: "3", img: "event-gallery3.jpg"},
      {id: "4", img: "event-gallery4.jpg"},
      {id: "5", img: "event-gallery5.jpg"},
    ],

    // Event Classes Data.
    eventDetails:
    {id: '1', address: '03 Elgezera road 520 direct', date:'22/07/2022', time: '9AM to 02PM', teacherImg: 'img1.png', name: 'Sayed Hamdi', job: 'Engineer', details1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.', details2: 'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.', activities: [{id: '1', number: '1', activity: 'Program opening', text: 'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi'}, {id: '2', number: '2', activity: 'Dance and have fun', text: 'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi'}, {id: '3', number: '3', activity: 'Present gifts to students', text: 'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi'}, {id: '4', number: '4', activity: 'Program ending', text: 'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi'}], },

    // Contacts Data.
    contactsData:
    {id: '1', address: 'Franklin St, Greenpoint Ave', time: 'Mon - Fri 8 AM - 5 PM', phone: '+201156260918'},

    // Class Single Data
    classSingleData: [
      {
        id: '1',
        pannerImg: 'class-single-banner2.jpg',
        courseName: 'Basic English Speaking and Grammar',
        coursePrice:'45$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '123 КB'},
        classInfo: {
          day: 'Saturday',
          fromTo: 'Mon-Fri',
          time: '8AM - 10AM',
          age: '9-14 Years',
          classSize: '20-30 Kids',
          couresDuration: '25 hours',
          courseTeacher: { name:'Badr Jibali', teacherSecialty: 'Scientist', img: 'img1.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img1.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },activitiesInvolved
        : [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },

      {
        id: '2',
        pannerImg: 'class-single-banner1.jpg',
        courseName: 'Natural Chemistry & Physics​',
        coursePrice:'60$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '103 КB'},
        classInfo: {
          day: 'Sunday',
          fromTo: 'Mon-Sat',
          time: '10AM - 12AM',
          age: '9-14 Years',
          classSize: '20-30 Kids',
          couresDuration: '35 hours',
          courseTeacher: { name:'Sayed Hamdi', teacherSecialty: 'Programer', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img2.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },

      {
        id: '3',
        pannerImg: 'class-single-banner2.jpg',
        courseName: 'Natural Sciences & Mathematics Courses​',
        coursePrice:'80$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '23 КB'},
        classInfo: {
          day: 'Monday',
          fromTo: 'Mon-Fri',
          time: '12AM - 02PM',
          age: '9-14 Years',
          classSize: '25-30 Kids',
          couresDuration: '20 hours',
          courseTeacher: { name:'Abd-Allah Ahmed', teacherSecialty: 'Chemist', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img3.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },

      {
        id: '4',
        pannerImg: 'class-single-banner1.jpg',
        courseName: 'Your Complete Guide to Photography​',
        coursePrice:'30$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '356 КB'},
        classInfo: {
          day: 'Tuesday',
          fromTo: 'Mon-Fri',
          time: '02PM - 04PM',
          age: '9-14 Years',
          classSize: '10-20 Kids',
          couresDuration: '40 hours',
          courseTeacher: { name:'Ali Hamdi', teacherSecialty: 'Professor', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img4.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },
      {
        id: '5',
        pannerImg: 'class-single-banner2.jpg',
        courseName: 'Learn JavaScript – OOP JavaScript​',
        coursePrice:'45$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '12563 КB'},
        classInfo: {
          day: 'Thursday',
          fromTo: 'Mon-Fri',
          time: '10AM - 12AM',
          age: '9-14 Years',
          classSize: '20-30 Kids',
          couresDuration: '25 hours',
          courseTeacher: { name:'Mahmoud Elaraby', teacherSecialty: 'Teacher', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img5.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },
      {
        id: '6',
        pannerImg: 'class-single-banner2.jpg',
        courseName: 'Learn Python – Interactive Python​',
        coursePrice:'45$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '123 КB'},
        classInfo: {
          day: 'Tuesday',
          fromTo: 'Mon-Fri',
          time: '8AM - 10AM',
          age: '9-14 Years',
          classSize: '20-30 Kids',
          couresDuration: '25 hours',
          courseTeacher: { name:'Sayed Hamdi', teacherSecialty: 'Programer', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img6.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },
      {
        id: '7',
        pannerImg: 'class-single-banner2.jpg',
        courseName: 'Introduction to LearnPress LMS Plugin',
        coursePrice:'45$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '783 КB'},
        classInfo: {
          day: 'Friday',
          fromTo: 'Mon-Fri',
          time: '04PM - 06PM',
          age: '9-14 Years',
          classSize: '20-30 Kids',
          couresDuration: '50 hours',
          courseTeacher: { name:'Badr Jibali', teacherSecialty: 'Designer', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img7.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },
      {
        id: '8',
        pannerImg: 'class-single-banner2.jpg',
        courseName: 'Learn JavaScript – DOM JavaScript​',
        coursePrice:'45$',
        classProgram:{fileName:'Adobe Acrobat file', fileSize: '25623 КB'},
        classInfo: {
          day: 'Saturday',
          fromTo: 'Mon-Fri',
          time: '04PM - 06PM',
          age: '9-14 Years',
          classSize: '20-30 Kids',
          couresDuration: '25 hours',
          courseTeacher: { name:'Sayed Hamdi', teacherSecialty: 'Programer', img: 'ico.png'},
        },
        courseDetails: {
          prag1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra ac, eleifend ut tellus.',
          prag2:'Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac habitasse platea dictumst.',
          prag3:'Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus. Praesent finibus lacus at urna fringilla, fermentum sodales enim sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare mauris, in tincidunt ex laoreet et. Donec eu arcu euismod, pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed suscipit.',
          prag4:'Nam aliquet euismod metus in hendrerit. Quisque finibus facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci euismod at.',
        },
        img: 'img8.jpg',
        educationPrograms: {
          prag1: 'Aliquam dui tellus, sollicitudin eget malesuada at, blandit id magna. Integer non mauris urna. Curabitur placerat metus in pulvinar imperdiet. Vivamus bibendum eu tellus quis consectetur. Aliquam tincidunt dui augue, at porttitor quam semper et.',
          prag2: 'Vestibulum aliquam leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget. Nullam feugiat quam nec dolor posuere tempus sed eu mauris. Phasellus tempus sapien at nunc volutpat, et convallis magna ultrices. Duis eu neque ut arcu accumsan consectetur.',
        },
        activitiesInvolved: [
          {id: '1', activity: 'Sensory Time'},
          {id: '2', activity: 'Free Play with Technology Corner'},
          {id: '3', activity: 'Puppet shows and skits'},
          {id: '4', activity: 'Creative Time'},
          {id: '5', activity: 'Language Readiness'},
          {id: '6', activity: 'Opportunities for fine and gross motor'}
        ],
      },
    ],


  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
