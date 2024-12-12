import { useForm } from "react-hook-form";

export const Form = () => {
	const {register, handleSubmit} = useForm();
	const onSubmit = (data) => console.log(data);


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="User name"/>
      <input {...register("e-mail")} placeholder="User e-mail"/>
			<input {...register("password")} placeholder="User password"/>
      <input type="submit" />
    </form>
	)
};