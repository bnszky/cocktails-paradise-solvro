import React, { useState } from 'react'
import { FormField, FormItem, FormControl, FormDescription, FormMessage } from '../ui/form' 
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import { CustomAlertDialog } from '../ui-wrapper/CustomAlertDialog'

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    surname: z.string().min(2, {
        message: "Surname must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
});

export function CustomFormField({ control, name }: any) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input placeholder={name.charAt(0).toUpperCase() + name.slice(1)} {...field} className='w-60 font-bold'/>
                </FormControl>
                </FormItem>
            )}
        />
    );
}

function Newsletter() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          surname: "",
          email: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsDialogOpen(true);
      }

  return (
    <div className='w-full flex flex-row items-center justify-center mt-10 bg-accent'>
    <div className="w-2/3 flex flex-row flex-wrap items-start justify-center my-20">
      <div className="flex flex-col w-140 lg:mr-20 text-center lg:text-left mb-5">
        <div className="text-3xl font-bold mb-4 text-primary">Newsletter</div>
        <p className="text-xl text-secondary-foreground">Dołącz do naszego newslettera, aby otrzymywać najnowsze informacje o drinkach Dołącz do naszego newslettera, aby otrzymywać najnowsze informacje o drinkach Dołącz do naszego newslettera, aby otrzymywać najnowsze informacje o drinkach</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-5">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CustomFormField name="name" control={form.control} />
            <CustomFormField name="surname" control={form.control} />
            <CustomFormField name="email" control={form.control} />
            <FormMessage />
            <Button type="submit" variant="default" className='w-60'>Send</Button>
        </form>
        </Form>
      </div>
    </div>
    <CustomAlertDialog 
      isOpen={isDialogOpen} 
      onClose={() => setIsDialogOpen(false)} 
      title={`Hello ${form.getValues().name}!`} 
      message="Thank you for subscribing to our newsletter! You can trust us and you will never receive any emails!" 
      acceptMessage="Close" 
      cancelMessage={null} 
    />
    </div>
  )
}

export default Newsletter
