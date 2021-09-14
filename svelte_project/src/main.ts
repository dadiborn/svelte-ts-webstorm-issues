import App from './App.svelte';
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
imFromGlobal_Outside.a; // << suggestion works but icon is (F), not line in .svelte component
imFromGlobal_Inside.a; // << works and correct icon P

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;