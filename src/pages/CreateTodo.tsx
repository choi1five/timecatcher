import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { IForm, todoState, ITodo } from "./atoms";
import ImgSrc from "./img/AddImg.png";
import { authState } from "../atoms/atoms";
import { firestore } from "../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import useFireReq from "../hooks/useFireReq";
//css

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 15px;
  margin-left: -16px;
  width: 366px;
  height: 64px;
  gap: 10px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.inputBox};
  // background-color: #79767a;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const AddBtn = styled.button`
  border: none;
  width: 16px;
  height: 16px;
  background: url(${ImgSrc}) center;
  background-size: cover;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }
`;
const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: none;
  padding: 8px;
  gap: 4px;
  // background: #fffbff;
  background-color: ${(props) => props.theme.inputBox};
  color: ${(props) => props.theme.textColor};
  width: 365px;
  height: 34px;
  border-radius: 15px;
  box-sizing: border-box;
  &::placeholder {
    color: ${(props) => props.theme.textColor};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.textColor};
  }

`;

export default function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const setTodo = useSetRecoilState(todoState);


  const [todos, setTodos] = useRecoilState(todoState);
  const { addTodoFireBase } = useFireReq();

  const handleTodo = ({ todo }: IForm) => {
    const newTodo = { text: todo, id: 0, min: 0, sec: 0 };
    setValue("todo", "");
    addTodoFireBase(newTodo);
  }; //투두값을 리코일 스테이트(버블)에 추가하는 함수

  return (
    <div style={{maxWidth:"60vw"}}>
      <Form onSubmit={handleSubmit(handleTodo)}>
        <AddBtn />
        <Input
          placeholder="할일에 작업 추가하기"
          {...register("todo", {
            required: "빈칸입니다! 할 일을 채워주세요!",
          })}
        />
      </Form>
    </div>
  );
}
