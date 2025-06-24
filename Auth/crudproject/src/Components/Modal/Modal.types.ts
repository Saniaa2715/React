import type { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren{
    title:string;
    isOpen:boolean;
    // onConfirm:()=>void;
    onClose:()=>void;
} 
