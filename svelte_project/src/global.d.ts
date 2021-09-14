/// <reference types="svelte" />

// for ts outside project scope:
//no highlighting
//no declaration
import {some_obj as objOutsideRootDir} from '../../other_project/lib'
//here initial type is ANY (incorrect)
type objOutsideRootDirT = typeof objOutsideRootDir;
// but suggestions works!!
objOutsideRootDir.a.b;

// for ts inside project scope everything works
import {some_obj as objInsideRootDir} from './../if_in_root/lib';
type objInsideRootDirT = typeof objInsideRootDir;
declare global {
    const imFromGlobal_Outside:objOutsideRootDirT;
    const imFromGlobal_Inside:objInsideRootDirT;
}