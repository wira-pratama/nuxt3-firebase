<template>
    <div>
        <section class="hero min-h-screen bg-base-200 text-white">
            <div class="hero-content text-left flex flex-col lg:flex-row-reverse items-center">
                <img class="md:w-1/3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"/>
                <div class="max-w-3xl">
                    <h1 class="font-cursive text-2xl md:text-4xl font-semibold">This is a great headline!</h1>
                    <p class="font-secondary text-xs md:text-base py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati praesentium tempora eligendi necessitatibus corporis exercitationem, illo eius porro aperiam? Nostrum numquam ipsam quidem! Quam soluta autem alias eos nulla.
                    </p>
                    <NuxtLink v-if="!firebaseUser" to="/register"><button class="font-primary btn btn-primary">Register</button></NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup lang="ts">
    const firebaseUser: any = useFirebaseUser();
</script>