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
    return this.secBackground +` bg-cover relative bg-no-repeat h-128 w-full lg:right-16 lg:mr-40 flex-1`;
  },
}
};
</script>

<template>

<div name="sectionContainer" class="bg-azure h-full lg:pt-16 flex justify-center items-center">
<div name="sectionText" class="z-10 bg-white lg:w-2/5 lg:h-auto lg:pt-5 lg:px-5 lg:ml-48 mr-auto">
  <h1 class="text-black font-bold pt-2 lg:mb-6">{{heading}}</h1>
  <p>{{text}}</p>
  <button class="bg-black hover:bg-azure-600 text-white font-bold py-2 px-4 my-10"> {{button}} </button>
</div>
<div name="secBackground" :class="sectionImage"></div>
</div>

    
</template>