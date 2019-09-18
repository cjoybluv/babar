<template>
	<v-card width="400" class="mx-auto mt-5">
		<v-card-title>
			<h1 class="display-1">Login</h1>
		</v-card-title>
		<v-card-text>
			<v-form>
				<v-text-field 
					autofocus
					v-model="loginData.email" 
					label="Email" type="email" 
					prepend-icon="mdi-account-circle" />
				<v-text-field
					v-model="loginData.password"
					:type="showPassword ? 'text' : 'password'"
					label="Password"
					prepend-icon="mdi-lock"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showPassword = !showPassword"
				/>
			</v-form>
		</v-card-text>
		<v-divider></v-divider>
		<v-card-actions>
			<v-btn color="success">Register</v-btn>
			<v-spacer></v-spacer>
			<v-btn color="info" @click="login">Login</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import NProgress from 'nprogress'

export default {
	name: 'LoginPage',
	data() {
		return {
			loginData: {
				email: '',
				password: ''
			},
			showPassword: false
		}
	},
	methods: {
		login() {
			NProgress.start()
			this.$store
				.dispatch('auth/login', this.loginData)
				.then(() => {
					NProgress.done()
					this.$router.push({ name: 'dashboard'})
				})
				.catch(error => {
					NProgress.done()
				})
		}
	}
}
</script>

<style></style>
