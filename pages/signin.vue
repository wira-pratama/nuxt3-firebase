<template>
    <section class="hero min-h-screen bg-base-200">
        <div class="hero-content flex flex-col w-full md:w-1/3">
            <div class="flex items-center">
                <h3 class="font-primary">Haven't registered?</h3>
                <NuxtLink to="/register" class="ml-2 btn btn-sm btn-ghost">Register Instead</NuxtLink>
            </div>
            <div class="card border bg-base-200 w-full px-5 py-5">
                <h2 class="font-cursive mb-5 text-xl font-semibold text-white">Sign In</h2>
                <div v-if="signInMessage" class="alert alert-success alert-sm">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span class="font-secondary">{{ signInMessage }}</span>
                    </div>
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="font-primary label-text text-white">Email</span>
                        <span class="font-secondary label-text-alt text-primary">{{ emailInputValidation(signinForm.email).message }}</span>
                    </label>
                    <input
                        v-model="signinForm.email"
                        class="font-secondary input input-bordered"
                        type="email"
                        placeholder="john@gmail.com"
                        autocomplete="false"
                    />
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="font-primary label-text text-white">Password</span>
                        <span class="font-secondary label-text-alt text-primary">{{ notEmptyInputValidation(signinForm.password).message }}</span>
                    </label>
                    <input
                        v-model="signinForm.password"
                        class="font-secondary input input-bordered"
                        type="password"
                        placeholder="*************"
                        autocomplete="false"
                    />
                </div>
        
                <button class="font-primary btn mt-6" @click="signin()">
                    Submit
                </button>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
    const signinForm: any = ref({ email: "", password: "" });
    const signInMessage: any = ref("")


    const signin = () => {
        signInMessage.value = "Signing you in..."
        if (
            emailInputValidation(signinForm.value.email).valid &&
            notEmptyInputValidation(signinForm.value.password).valid
        ) {
            signInUser(signinForm.value.email, signinForm.value.password);
            signinForm.value = { email: "", password: "" };
        }
    };
</script>