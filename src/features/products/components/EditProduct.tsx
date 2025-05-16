import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BsPaperclip } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

import { Home } from '@/assets';
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
import { Loader } from '@/components/ui/loader';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ErrorFallback } from '@/routes';

import { useProductById } from '../api/getProductById';
import { useUpdateProduct } from '../api/updateProduct';
import { productSchema } from '../types/productSchema';

export default function EditProduct() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductById(id);
  const updateProductMutation = useUpdateProduct();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (product) {
      form.reset({
        title: product.title,
        description: product.description,
        brand: product.brand,
        sku: product.sku,
        stock: product.stock,
        dimensions: product.dimensions,
        warrantyInformation: product.warrantyInformation,
        shippingInformation: product.shippingInformation,
        images: product.images,
        price: product.price,
        discountPercentage: product.discountPercentage,
        thumbnail: product.thumbnail,
        availabilityStatus: product.availabilityStatus,
        category: product.category,
        tags: product.tags,
      });
    }
  }, [product, form]);

  async function onSubmit(values: z.infer<typeof productSchema>) {
    if (!id) {
      alert('No product id found!');
      return;
    }

    try {
      await updateProductMutation.mutateAsync({
        id,
        updatedData: {
          title: values.title,
          description: values.description,
          brand: values.brand,
          sku: values.sku,
          stock: values.stock,
          dimensions: values.dimensions,
          warrantyInformation: values.warrantyInformation,
          shippingInformation: values.shippingInformation,
          images: values.images,
          price: values.price,
          discountPercentage: values.discountPercentage,
          thumbnail: values.thumbnail,
          availabilityStatus: values.availabilityStatus,
          category: values.category,
          tags: values.tags,
        },
      });
      toast(
        <pre className="bg-accent mt-2 h-[800px] w-full rounded-md p-4">
          <code className="text-background block w-full whitespace-pre-wrap">
            {JSON.stringify(values, null, 4)}
          </code>
        </pre>
      );
      navigate(-1);
    } catch (error) {
      alert('Failed to update product');
      console.error(error);
    }
  }

  if (isLoading) return <Loader />;
  if (!product || isError) return <ErrorFallback />;

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
                name="title"
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
                  name="dimensions.width"
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
                  name="dimensions.height"
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
                  name="warrantyInformation"
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
                  name="shippingInformation"
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
                name="images"
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
                name="discountPercentage"
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
                      <img
                        className="h-[160px] w-full object-contain"
                        src={product.thumbnail}
                        alt="thumbnail"
                        {...field}
                      />
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
                name="availabilityStatus"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={product.availabilityStatus}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="In Stock">In Stock</SelectItem>
                        <SelectItem value="Low Stock">Low Stock</SelectItem>
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categories</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={product.category}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Draft" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beauty">Beauty</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="fragrances">Fragrances</SelectItem>
                        <SelectItem value="groceries">Groceries</SelectItem>
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
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={product.tags[0]}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Draft" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {product?.tags?.map((tag, id) => {
                          return (
                            <SelectItem key={id} value={tag}>
                              {tag}
                            </SelectItem>
                          );
                        })}
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
          <Button type="submit" variant="submit" disabled={updateProductMutation.isPending}>
            {updateProductMutation.isPending ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button onClick={() => navigate(-1)} type="button" variant="cancel">
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
