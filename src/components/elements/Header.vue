<script setup></script>

<template>
  <header>
    <div class="container mx-auto">
      <ul class="flex justify-center gap-x-4 py-2">
        <li>
          <RouterLink class="hover:text-green-500 transition" to="/"
            >Home page
          </RouterLink>
        </li>
        <li>
          <RouterLink class="hover:text-green-500 transition" to="/about"
            >About page
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
