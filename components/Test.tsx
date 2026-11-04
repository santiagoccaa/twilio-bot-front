import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Upload,
  Plus,
  MoreVertical,
  Shirt,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    id: "1",
    name: "Nike Jordan 1",
    brand: "Nike",
    category: "Fashion",
    price: "$450",
    qty: 134,
    status: "Publish",
    image: "👟", // Replace with actual Next.js <Image /> or <img>
  },
  {
    id: "2",
    name: "Ray Ban Aviator",
    brand: "Ray Ban",
    category: "Fashion",
    price: "$249",
    qty: 203,
    status: "Publish",
    image: "🕶️",
  },
  {
    id: "3",
    name: "Ray Ban EyeCat",
    brand: "Ray Ban",
    category: "Fashion",
    price: "$1,399",
    qty: 34,
    status: "Scheduled",
    image: "🕶️",
  },
  {
    id: "4",
    name: "Nike Air Max",
    brand: "Nike",
    category: "Fashion",
    price: "$149",
    qty: 234,
    status: "Publish",
    image: "👟",
  },
];

export default function Test() {
  return (
    <div className="w-full bg-red-500 px-2">
      <div className="max-w-7xl mx-auto space-y-6 bg-[#18181b] border border-zinc-800 rounded-xl p-4">
        {/* Top Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-zinc-800">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Select Category
            </label>
            <Select defaultValue="fashion">
              <SelectTrigger className="w-full bg-transparent border-zinc-700 focus:ring-zinc-700">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Select Stock
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full bg-transparent border-zinc-700 focus:ring-zinc-700">
                <SelectValue placeholder="Select Stock" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Select Status
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full bg-transparent border-zinc-700 focus:ring-zinc-700">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Toolbar: Search & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search product"
              className="pl-9 bg-transparent border-zinc-700 focus-visible:ring-zinc-700"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Select defaultValue="10">
              <SelectTrigger className="w-[70px] bg-transparent border-zinc-700 focus:ring-zinc-700">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="bg-transparent border-zinc-700 hover:bg-zinc-800 text-zinc-300"
            >
              <Upload className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        {/* Data Table */}
        <div className="border border-zinc-800 rounded-md overflow-hidden">
          <Table>
            <TableHeader className="bg-zinc-900/50">
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="w-[50px] text-center">
                  <Checkbox className="border-zinc-600 data-[state=checked]:bg-zinc-100 data-[state=checked]:text-zinc-900" />
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  Product
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  Category
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  Stock
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  Amount
                </TableHead>
                <TableHead className="text-zinc-400 font-medium">QTY</TableHead>
                <TableHead className="text-zinc-400 font-medium">
                  Status
                </TableHead>
                <TableHead className="text-zinc-400 font-medium text-right pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-zinc-800 hover:bg-zinc-800/50"
                >
                  <TableCell className="text-center align-middle">
                    <Checkbox className="border-zinc-600 data-[state=checked]:bg-zinc-100 data-[state=checked]:text-zinc-900" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-zinc-100 rounded-md flex items-center justify-center text-xl shrink-0">
                        {product.image}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-zinc-100">
                          {product.name}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {product.brand}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-zinc-300 gap-2">
                      <div className="bg-zinc-800 p-1.5 rounded-md">
                        <Shirt className="h-4 w-4 text-zinc-400" />
                      </div>
                      {product.category}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Switch
                      defaultChecked
                      className="data-[state=checked]:bg-zinc-100 data-[state=unchecked]:bg-zinc-700"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-zinc-100">
                    {product.price}
                  </TableCell>
                  <TableCell className="text-zinc-300">{product.qty}</TableCell>
                  <TableCell>
                    {product.status === "Publish" ? (
                      <Badge
                        variant="outline"
                        className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20 font-normal"
                      >
                        Publish
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20 font-normal"
                      >
                        Scheduled
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right pr-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        }
                      />

                      <DropdownMenuContent
                        align="end"
                        className="bg-zinc-900 border-zinc-800 text-zinc-300"
                      >
                        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer text-red-400">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-zinc-800 hover:bg-zinc-800/50"
                >
                  <TableCell className="text-center align-middle">
                    <Checkbox className="border-zinc-600 data-[state=checked]:bg-zinc-100 data-[state=checked]:text-zinc-900" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-zinc-100 rounded-md flex items-center justify-center text-xl shrink-0">
                        {product.image}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-zinc-100">
                          {product.name}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {product.brand}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-zinc-300 gap-2">
                      <div className="bg-zinc-800 p-1.5 rounded-md">
                        <Shirt className="h-4 w-4 text-zinc-400" />
                      </div>
                      {product.category}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Switch
                      defaultChecked
                      className="data-[state=checked]:bg-zinc-100 data-[state=unchecked]:bg-zinc-700"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-zinc-100">
                    {product.price}
                  </TableCell>
                  <TableCell className="text-zinc-300">{product.qty}</TableCell>
                  <TableCell>
                    {product.status === "Publish" ? (
                      <Badge
                        variant="outline"
                        className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20 font-normal"
                      >
                        Publish
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20 font-normal"
                      >
                        Scheduled
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right pr-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        }
                      />

                      <DropdownMenuContent
                        align="end"
                        className="bg-zinc-900 border-zinc-800 text-zinc-300"
                      >
                        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer text-red-400">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer / Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-sm text-zinc-400">
          <div>Showing 1 to 4 of 4 entries</div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              size="sm"
              className="bg-zinc-200 text-zinc-900 hover:bg-zinc-300 h-8 w-8 p-0"
            >
              1
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-50"
              disabled
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
