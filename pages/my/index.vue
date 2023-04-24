<template>
    <section class="hero min-h-screen bg-base-200">
        <div class="hero-content my-20 md:my-40 text-center">
            <div class="max-w-3xl">
                <div class="max-w-3xl mx-auto">
                    <h2 v-if="firebaseUser" class="font-secondary text-md md:text-xl">Hello,</h2>
                    <h3 v-if="firebaseUser" class="text-white font-cursive pt-4 text-xl md:text-4xl">{{ firebaseUser.email }}</h3>
                    <p class="font-secondary text-xs md:text-sm py-6">This is your client area</p>
                </div>
                <button class="font-primary btn btn-sm btn-info mt-10" @click="signOut" v-if="firebaseUser">Sign out</button>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
  definePageMeta({
    middleware: ["auth"],
  });
  const firebaseUser: any = useFirebaseUser();
  const signOut = async () => {
    await signOutUser();
  };
</script>
  