<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
    secBackground: {
      type: String,
      required: true,
    },
  },
computed: {
  sectionImage() {
    return this.secBackground +` hidden lg:block bg-cover relative bg-no-repeat h-128 w-full lg:right-16 lg:mr-40 flex-1 rounded-md`;
  },
}
};
</script>

<template>

<div name="sectionContainer" class="bg-stone-300 h-full lg:pt-16 flex justify-center px-4 pt-8 items-center">
<div name="sectionText" class="z-10 bg-white lg:w-2/5 lg:h-auto lg:pt-5 lg:px-5 lg:ml-48 px-4 mr-auto">
  <h1 class="text-black font-black pt-5 lg:mb-6 text-xl">{{heading}}</h1>
  <p>{{text}}</p>
  <button class="bg-black hover:bg-azure-600 text-white font-bold lg:py-2 py-2 px-2 lg:px-4 lg:my-10 my-4"> {{button}} </button>
</div>
  <div name="secBackground" :class="sectionImage"></div> 
</div>

    
</template>