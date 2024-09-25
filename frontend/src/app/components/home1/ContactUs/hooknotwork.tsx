import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PinkButton from '../../common/Buttons/PinkButton';

interface IFormInputs {
  firstName: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  inquiry: string;
}

const InputText1 = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="h-[61.58px] border rounded-[15px] border-[#D9DDFE] pl-4 w-full"
  />
));

const InputText2 = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => (
  <textarea
    {...props}
    ref={ref}
    className="h-[239.47px] border rounded-[15px] border-[#D9DDFE] pl-4 pt-4 resize-none w-full"
  />
));

const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap flex-col">
      <div className="flex flex-col gap-y-5">
        {/* Form */}
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row justify-between gap-4">
            <div className="flex-1">
              <InputText1
                {...register("firstName", { required: "First name is required" })}
                placeholder="First Name"
              />
              {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
            </div>
            <div className="flex-1">
              <InputText1
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last Name"
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
            </div>
          </div>
          <InputText1
            {...register("emailAddress", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            placeholder="Email address"
          />
          {errors.emailAddress && <span className="text-red-500">{errors.emailAddress.message}</span>}
          <InputText1
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject message"
          />
          {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
          <InputText2
            {...register("inquiry", { required: "Inquiry is required" })}
            placeholder="Your inquiry here"
          />
          {errors.inquiry && <span className="text-red-500">{errors.inquiry.message}</span>}
        </div>
        {/* Form */}

        {/* Button */}
        <div className="flex flex-row mt-10">
          <PinkButton type="submit">Send Message</PinkButton>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;