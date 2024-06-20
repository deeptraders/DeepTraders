'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { client } from "@/sanity/lib/client";
import { useEffect } from "react";

export default function Component() {

  async function getProducts() {
    const query = `*[_type == "curtain"] {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    price,
    size,
    material,
    color,
    availability
  }`;

    try {
      const curtains = await client.fetch(query);
      console.log(curtains);
      return curtains;
    } catch (error) {
      console.log('Error fetching curtains', error);
    }
  }
  
  useEffect(()=>{
    getProducts();
  }, []);
  // const products = await getProducts();
  // console.log(products);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-10 backdrop-blur-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Curtain & Sofa Co.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Curtains
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sofas
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-[url('/')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Home with Our Curtain & Sofa Collection
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover our exquisite collection of high-quality curtains and sofas, designed to transform your
                    living space into a sanctuary of style and comfort.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Shop Curtains
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Shop Sofas
                  </Link>
                </div>
              </div>
              <Image
                src="https://images.pexels.com/photos/969593/pexels-photo-969593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={550}
                height={550}
                alt="Hero Product"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Featured Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Curated Collection</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our carefully selected range of curtains and sofas, designed to elevate the ambiance of any
                  living space.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <Link href="#" className="group grid gap-4 items-center" prefetch={false}>
                      <Image
                        src="https://images.pexels.com/photos/9615897/pexels-photo-9615897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={550}
                        height={310}
                        alt="Velvet Curtains"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold group-hover:underline">Velvet Curtains</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Luxurious and elegant curtains that add a touch of sophistication to any room.
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">$99</span>
                          <Button variant="outline" size="sm">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="group grid gap-4 items-center" prefetch={false}>
                      <Image
                        src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg"
                        width={550}
                        height={310}
                        alt="Linen Sofa"
                        className="mx-auto aspect-vitdeo overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      />
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold group-hover:underline">Linen Sofa</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Comfortable and stylish sofa that complements any living room decor.
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">$799</span>
                          <Button variant="outline" size="sm">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <Image
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={550}
                height={310}
                alt="Featured Products"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Explore Our Curtain Collection</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our wide selection of high-quality curtains, perfect for transforming any room.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Shop Curtains
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Discover Our Sofa Collection</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Elevate your living space with our stylish and comfortable sofa options.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Shop Sofas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Curtains
            </Link>
            <Link href="#" prefetch={false}>
              Sofas
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Inspiration Gallery
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Customer Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}