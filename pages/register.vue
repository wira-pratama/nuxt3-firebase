<template>
    <section class="hero min-h-screen bg-base-200">
        <div class="hero-content flex flex-col w-full md:w-1/3">
            <div class="flex items-center">
                <h3 class="font-primary">Already registered?</h3>
                <NuxtLink to="/signin" class="ml-2 btn btn-sm btn-ghost">Signin Instead</NuxtLink>
            </div>
            <div class="divider my-0"></div>
            <div class="card border bg-base-200 w-full px-5 py-5">
                <h2 class="font-cursive mb-5 text-xl font-semibold text-white">Register</h2>
                <div v-if="registerMessage" class="alert alert-success alert-sm">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span class="font-secondary">{{ registerMessage }}</span>
                    </div>
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="font-primary label-text text-white">Email</span>
                        <span class="font-secondary label-text-alt text-primary">{{ emailInputValidation(registerForm.email).message }}</span>
                    </label>
                    <input
                        v-model="registerForm.email"
                        class="font-secondary input input-bordered"
                        type="email"
                        placeholder="john@gmail.com"
                        autocomplete="false"
                    />
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="font-primary label-text text-white">Password</span>
                        <span class="font-secondary label-text-alt text-primary">{{ notEmptyInputValidation(registerForm.password).message }}</span>
                    </label>
                    <input
                        v-model="registerForm.password"
                        class="font-secondary input input-bordered"
                        type="password"
                        placeholder="*************"
                        autocomplete="false"
                    />
                </div>
        
                <button class="font-primary btn mt-6" @click="register()">
                    Submit
                </button>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
    const registerMessage = ref("");
    const registerForm: any = ref({ email: "", password: ""});

    const register = async () => {
        registerMessage.value = "Registering your team..."
        if (
            emailInputValidation(registerForm.value.email).valid &&
            notEmptyInputValidation(registerForm.value.password).valid
        ) {
            const credentials = await createUser(
                registerForm.value.email,
                registerForm.value.password,    
            );
            registerForm.value = { 
                email: "", 
                password: "",
            };
            if (credentials) {
                    registerMessage.value = `Successfully registered: ${credentials.user.email}`;
                setTimeout(() => {
                    registerMessage.value = "";
                }, 3000);
            }
        }
    };
</script>