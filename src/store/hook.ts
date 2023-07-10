import { AppDispatch,RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import actionCreators  from "../features/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(actionCreators, dispatch);
}