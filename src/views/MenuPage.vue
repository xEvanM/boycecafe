<script setup>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
  <div>
    <Navbar></Navbar>

    <div class="bg-stone-300 p-4 sm:p-8 ">
      <div class="mb-8">
        <!-- Food Section -->
        <div class="bg-stone-200 rounded-lg pt-6 mb-4">
          <h2 class="text-3xl font-extrabold justify-center text-center text-slate-950 mb-6">EAT</h2>
          <div class="flex flex-col sm:flex-row">
            <!-- Light Bites Section -->
            <div class="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0 px-10">
              <div class="bg-white rounded-lg p-4 border-black-2px">
                <h3 class="text-lg font-bold text-slate-950 mb-4">Light Bites</h3>
                <ul>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Salad</span>
                        <p class="text-sm text-gray-500 font-mono">Fresh and healthy salad.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$6</span>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Salad</span>
                        <p class="text-sm text-gray-500 font-mono">Fresh and healthy salad.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$6</span>
                    </div>
                  </li>
                  <!-- Add more light bite items here -->
                </ul>
              </div>
            </div>

            <!-- Sides Section -->
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4 px-10 pb-12">
              <div class="bg-white rounded-lg p-4">
                <h3 class="text-lg font-bold text-slate-950 mb-4">Sides</h3>
                <ul>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Fries</span>
                        <p class="text-sm text-gray-500 font-mono">Crispy and golden fries.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$4</span>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Fries</span>
                        <p class="text-sm text-gray-500 font-mono">Crispy and golden fries.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$4</span>
                    </div>
                  </li>
                  <!-- Add more side items here -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Food Section -->
      <div class="bg-stone-200 rounded-lg pt-6 mb-4">
          <h2 class="text-3xl font-extrabold justify-center text-center text-slate-950 mb-6">DRINK</h2>
          <div class="flex flex-col sm:flex-row">
            <!-- Light Bites Section -->
            <div class="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0 px-10">
              <div class="bg-white rounded-lg p-4 border-black-2px">
                <h3 class="text-lg font-bold text-slate-950 mb-4">Hot Drinks</h3>
                <ul>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Salad</span>
                        <p class="text-sm text-gray-500 font-mono">Fresh and healthy salad.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$6</span>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Salad</span>
                        <p class="text-sm text-gray-500 font-mono">Fresh and healthy salad.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$6</span>
                    </div>
                  </li>
                  <!-- Add more light bite items here -->
                </ul>
              </div>
            </div>

            <!-- Sides Section -->
            <div class="w-full sm:w-1/2 pl-0 sm:pl-4 px-10 pb-12">
              <div class="bg-white rounded-lg p-4">
                <h3 class="text-lg font-bold text-slate-950 mb-4">Cold Drinks</h3>
                <ul>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Fries</span>
                        <p class="text-sm text-gray-500 font-mono">Crispy and golden fries.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$4</span>
                    </div>
                  </li>
                  <li class="mb-4">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="font-semibold font-mono text-gray-600">Fries</span>
                        <p class="text-sm text-gray-500 font-mono">Crispy and golden fries.</p>
                      </div>
                      <span class="text-gray-600 font-mono">$4</span>
                    </div>
                  </li>
                  <!-- Add more side items here -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

  <Footer></Footer>
</template>
