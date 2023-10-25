
<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
 
</script>

<template>
    <div>
      <Navbar></Navbar>
  
      <div class="bg-azure p-16">
        <div class="flex mb-8 px-4">
          <div class="w-1/2 pr-4 bg-white p-4">
            <div class="flex justify-center items-center bg-black text-white py-2 mb-2">
              <h2 class="text-xl font-semibold font-mono">Light Bites</h2>
            </div>
            <ul>
              <li class="flex justify-between items-center py-2 border-b">
                <div>
                  <span class="font-bold font-mono">Burger</span>
                  <p class="text-sm text-gray-600 font-mono">Delicious beef burger with all the fixings.</p>
                </div>
                <span class="text-gray-600 font-mono">$10</span>
              </li>
              <li class="flex justify-between items-center py-2 border-b">
                <div>
                  <span class="font-bold font-mono">Sandwich</span>
                  <p class="text-sm text-gray-600 font-mono">Classic sandwich with your choice of fillings.</p>
                </div>
                <span class="text-gray-600 font-mono">$8</span>
              </li>
              <li class="flex justify-between items-center py-2 border-b">
                <div>
                  <span class="font-bold font-mono">Donut</span>
                  <p class="text-sm text-gray-600 font-mono">Sweet and fluffy donut.</p>
                </div>
                <span class="text-gray-600 font-mono">$3</span>
              </li>
              <!-- Add more food items here -->
            </ul>
          </div>
  
          <div class="w-1/2 pl-4 ml-16 bg-white p-4">
            <div class="flex justify-center items-center bg-black text-white py-2 mb-2">
              <h2 class="text-xl font-semibold font-mono">Beverages</h2>
            </div>
            <ul>
              <li class="flex justify-between items-center py-2 border-b">
                <div>
                  <span class="font-bold font-mono">Soda</span>
                  <p class="text-sm text-gray-600 font-mono">Refreshing carbonated beverage.</p>
                </div>
                <span class="text-gray-600 font-mono">$2</span>
              </li>
              <li class="flex justify-between items-center py-2 border-b">
                <div>
                  <span class="font-bold font-mono">Hot Chocolate</span>
                  <p class="text-sm text-gray-600 font-mono">Warm and comforting hot chocolate.</p>
                </div>
                <span class="text-gray-600 font-mono">$4</span>
              </li>
              <li class="flex justify-between items-center py-2 border-b">
                <div>
                  <span class="font-bold font-mono">Latte</span>
                  <p class="text-sm text-gray-600 font-mono">Smooth and creamy latte.</p>
                </div>
                <span class="text-gray-600 font-mono">$5</span>
              </li>
              <!-- Add more drink items here -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  
    <Footer></Footer>
  </template>