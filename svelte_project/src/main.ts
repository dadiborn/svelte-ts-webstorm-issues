import App from './App.svelte';
// works but in very strange way 
import {some_obj as objOutsideRootDir} from './../../other_project/lib'
objOutsideRootDir.a.b;


// if inside root folder everything works
import {some_obj as objInsideRootDir} from './../if_in_root/lib';
objInsideRootDir.a.b;

//using global.ts
imFromGlobal_Outside.a; // << suggestion works but icon is (F)
imFromGlobal_Inside.a; // << works

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
