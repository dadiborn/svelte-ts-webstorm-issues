<script lang="ts">
	// because we dig outside root folder:
    // 1. no import suggestions
    // 2. if you know what to import and write it down, declarations will be incorrect and taken from unknown places.
	// notes: this problems only present in Svelte component.
	import {some_obj as objOutsideRootDir} from './../../other_project/lib'
    objOutsideRootDir; // << incorrect declaration + no suggestion for .a.b.c


    // if inside root folder everything works
    // import suggestion and declarations are correct
	import {some_obj as objInsideRootDir} from './../if_in_root/lib';
    objInsideRootDir.a; // << correct declaration

	//using global.ts
    imFromGlobal_Outside; // << no expected suggestion
	imFromGlobal_Inside.a; // << works




	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
