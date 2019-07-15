<template>
    <span>
        <preloader></preloader>
        <header></header>
        <slider></slider>
        <about placeholder="testando"></about>
        <products></products>
        <half-image></half-image>
        <testimonials></testimonials>
        <services></services>
        <catalog></catalog>
        <staff></staff>
        <gallery></gallery>
        <contact></contact>
        <common-footer></common-footer>
    </span>
</template>

<script>
import Preloader from '../Business/Common/Preloader.vue'
import Header from '../Business/Common/Header.vue'
import About from '../Business/Common/AboutWhite.vue'
import Slider from '../Business/Slider/Revolution.vue'
import Products from '../Business/Ecom/Products.vue'
import HalfImage from '../Business/Common/HalfImage.vue'
import Testimonials from '../Business/Common/Testimonials.vue'
import Services from '../Business/Common/Services.vue'
import Catalog from '../Business/Ecom/Catalog.vue'
import Staff from '../Business/Common/Staff.vue'
import Gallery from '../Business/Common/Gallery.vue'
import Contact from '../Business/Common/Contact.vue'
import CommonFooter from '../Business/Common/Footer.vue'



export default {
  components: { 
    Preloader,
    Header,
    Slider,
    About,
    Products,
    HalfImage,
    Testimonials,
    Services,
    Catalog,
    Staff,
    Gallery,
    Contact,
    CommonFooter
  },props: [ 'placeholder' ]
}
</script>