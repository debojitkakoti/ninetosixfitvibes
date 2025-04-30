<script setup lang="ts">
import { ref } from 'vue'

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    role: 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The best decision I made for my fitness journey. The personalized approach and constant support helped me achieve my goals faster than I ever imagined.'
  },
  {
    name: 'Michael Chen',
    role: 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Professional, knowledgeable, and incredibly motivating. My performance has improved significantly since starting the program.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: "The holistic approach to fitness and wellness is what sets this program apart. I've never felt better!"
  }
])

const features = ref([
  {
    name: 'Personalized Training',
    description: 'Custom workout plans tailored to your goals, fitness level, and schedule.',
    icon: '🏋️‍♂️'
  },
  {
    name: 'Nutrition Guidance',
    description: 'Expert advice on meal planning and nutrition to complement your training.',
    icon: '🥗'
  },
  {
    name: 'Progress Tracking',
    description: 'Regular assessments and adjustments to keep you on track to your goals.',
    icon: '📊'
  },
  {
    name: '24/7 Support',
    description: 'Constant access to your coach for questions, motivation, and guidance.',
    icon: '💬'
  }
])
</script>

<template>
  <div class="min-h-screen bg-gray-50 w-full flex flex-col items-center">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-indigo-600 to-purple-600 w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8 py-24">
        <div class="w-full max-w-[1400px] mx-auto text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Transform Your Body,
            <span class="block">Transform Your Life</span>
          </h1>
          <p class="mt-3 max-w-3xl mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl lg:text-2xl">
            Professional fitness coaching to help you achieve your health and wellness goals. Personalized programs, expert guidance, and continuous support.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Start Your Journey
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-white w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-[1400px] mx-auto">
          <div class="text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Everything you need to succeed
            </p>
          </div>

          <div class="mt-10">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto">
              <div v-for="feature in features" :key="feature.name" class="relative text-center">
                <div class="text-4xl mb-4">{{ feature.icon }}</div>
                <h3 class="text-lg font-medium text-gray-900 lg:text-xl">{{ feature.name }}</h3>
                <p class="mt-2 text-base text-gray-500 lg:text-lg">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="bg-gray-50 py-16 w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-[1400px] mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              What our clients say
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-center mb-4">
                <img class="h-12 w-12 rounded-full" :src="testimonial.image" :alt="testimonial.name">
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900 lg:text-xl">{{ testimonial.name }}</h4>
                  <p class="text-sm text-gray-500 lg:text-base">{{ testimonial.role }}</p>
                </div>
              </div>
              <p class="text-gray-600 lg:text-lg">{{ testimonial.quote }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-indigo-700 w-full">
      <div class="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="w-full max-w-[1400px] mx-auto text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div class="lg:flex-1">
            <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span class="block">Ready to start your fitness journey?</span>
              <span class="block text-indigo-200">Join us today and transform your life.</span>
            </h2>
          </div>
          <div class="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:text-lg">
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:text-lg">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
