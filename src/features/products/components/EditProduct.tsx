import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BsPaperclip } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { z } from 'zod';

import { Home, Thumbnail } from '@/assets';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  productName: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  brand: z.string().min(2, {
    message: 'Brand must be at least 2 characters.',
  }),
  sku: z.string().min(2, {
    message: 'SKU must be at least 2 characters.',
  }),
  stock: z.string().min(2, {
    message: 'Stock must be at least 2 characters.',
  }),
  width: z.string().min(2, {
    message: 'Width must be at least 2 characters.',
  }),
  height: z.string().min(2, {
    message: 'Height must be at least 2 characters.',
  }),
  warranty: z.string().min(2, {
    message: 'Warranty must be at least 2 characters.',
  }),
  shipping: z.string().min(2, {
    message: 'Shipping must be at least 2 characters.',
  }),
  thumbnail: z.string().optional(),
  media: z.string().optional(),
  price: z.string().min(2, {
    message: 'Price must be at least 2 characters.',
  }),
  discount: z.string().min(2, {
    message: 'Discount must be at least 2 characters.',
  }),
});

export default function EditProduct() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      description: '',
      brand: '',
      sku: '',
      stock: '',
      width: '',
      height: '',
      warranty: '',
      shipping: '',
      thumbnail: '',
      media: '',
      price: '',
      discount: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted flex flex-col gap-7.5 rounded-3xl p-7.5"
      >
        <div className="bg-background flex items-center justify-between rounded-2xl px-7.5 py-4 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
          <p className="text-lg font-bold">Edit Product</p>
          <div className="flex items-center gap-2">
            <img src={Home} alt="home icon" />
            <p className="font-bold">/</p>
            <Badge>Edit Product</Badge>
          </div>
        </div>

        <div className="flex justify-between gap-7.5">
          <div className="w-full space-y-6">
            <div className="bg-background flex w-full flex-col gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
              <h2 className="text-lg font-bold">General</h2>
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Product Name <span className="text-[#FF6692]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      A product name is required and recommended to be unique.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>
                      Set a description to the product for better visibility.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Brand</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-7.5">
                <FormField
                  control={form.control}
                  name="sku"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>SKU</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-7.5">
                <FormField
                  control={form.control}
                  name="width"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Width</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Height</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-7.5">
                <FormField
                  control={form.control}
                  name="warranty"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Warranty</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shipping"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Shipping</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="bg-background flex w-full flex-col gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
              <h2 className="text-lg font-bold">Media</h2>
              <FormField
                control={form.control}
                name="media"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel>
                      <BsPaperclip className="h-6 w-6" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        // type="file"
                        placeholder="Drop files here or click to upload"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="bg-background flex w-full flex-col gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
              <h2 className="text-lg font-bold">Pricing</h2>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Base Price <span className="text-[#FF6692]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Set the product price.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Discount amount (%) <span className="text-[#FF6692]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Set the product discount</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background flex h-[380px] w-[280px] flex-col gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
              <h2 className="text-lg font-bold">Thumbnail</h2>
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <img className="w-full" src={Thumbnail} alt="thumbnail" {...field} />
                    </FormLabel>
                    <FormDescription className="mt-5 text-center text-sm">
                      Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are
                      accepted
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="bg-background flex w-[280px] flex-col gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Status</h2>
                <div className="h-3 w-3 rounded-full bg-[#FF6692]"></div>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Draft" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Set the product status</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="bg-background flex w-[280px] flex-col gap-7.5 rounded-2xl p-7.5 shadow-[-1px_2px_4px_-1px_rgba(175,182,201,0.2)]">
              <h2 className="text-lg font-bold">Product Details</h2>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categories</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Draft" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-foreground">
                      Add product to a category.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Badge className="w-full">+ Create New Category</Badge>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Draft" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription className="text-foreground">
                      Add tags to a product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Badge className="w-full">+ Create New Tag</Badge>
            </div>
          </div>
        </div>

        <div className="space-x-7.5">
          <Button type="submit" variant="submit">
            Save Changes
          </Button>
          <Button onClick={() => navigate(-1)} type="button" variant="cancel">
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
