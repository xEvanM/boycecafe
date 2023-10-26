<script setup>
import Navbar from "../components/Navbar.vue"
import SectionRight from "../components/SectionRight.vue"
import SectionLeft from "../components/SectionLeft.vue"
import Footer from "../components/Footer.vue"
 
</script>

<template>

<div class="h-screen">
  <navbar class="font-mono top-0 z-20 sticky"></navbar>

  <div class="hidden lg:flex lg:h-full lg:w-full bg-no-repeat bg-cover bg-cafe items-center justify-center ">
  <h1 class="text-6xl font-bold pb-36">WELCOME TO BOYCE & CO CAFE</h1>
</div>

</div>



    
    <SectionRight class="relative font-mono" heading="ABOUT US" button="Learn More" secBackground="bg-coffee"
    text="We are a family run cafe located in the heart of carrick on shannon. The perfect place to enjoy a light bite, a cup of one of our speciaility beverages, and a chat with your friends or family. Are you interested
    in learning more about our story?">
  </SectionRight>

  <SectionLeft class="relative font-mono" heading="OUR MENU" button="View our Menu" secBackground="bg-sandwich"
    text="We are a family run cafe located in the heart of Leitrim; the village of Mohill. The perfect place to enjoy a light bite, a cup of one of our speciaility beverages, and a chat with your friends or family. Are you interested
    in learning more about our story?">
  </SectionLeft>

  <SectionRight class="relative font-mono" heading="GIFT CARD" button="Buy now" secBackground="bg-giftcard"
    text="We are a family run cafe located in the heart of carrick on shannon. The perfect place to enjoy a light bite, a cup of one of our speciaility beverages, and a chat with your friends or family. Are you interested
    in learning more about our story?">
  </SectionRight>

  <Footer>
  </Footer>

</template>

<style scoped>
</style>
