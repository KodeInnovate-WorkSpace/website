import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MyDataTable({ data, collectionName }) {
  console.log(`Rendering table for ${collectionName} with data:`, data);
  return collectionName == "properties" ? (
    <PropertyTable tableData={data} />
  ) : (
    <CategoryTable tableData={data} />
  );
}

export const PropertyTable = ({ tableData }) => {
  console.log("Rendering table with data:", tableData);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Bedrooms</TableHead>
          <TableHead>Bathrooms</TableHead>
          <TableHead>Featured</TableHead>
          <TableHead className="text-right">Tag</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(tableData) && tableData.length > 0 ? (
          tableData.map((d, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{d.img}</TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.location}</TableCell>
              <TableCell>{d.size}</TableCell>
              <TableCell>{d.price}</TableCell>
              <TableCell>{d.bedrooms}</TableCell>
              <TableCell>{d.bathrooms}</TableCell>
              <TableCell>{d.featured}</TableCell>
              <TableCell className="text-right">{d.tag}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={10} className="text-center">
              No data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const CategoryTable = ({ tableData }) => {
  console.log("Rendering table with data:", tableData);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Projects</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(tableData) && tableData.length > 0 ? (
          tableData.map((d, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className=" w-14 h-14">
                  <img
                    src={d.img}
                    alt="Cateogry Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell className="text-right">{d.projects}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={10} className="text-center">
              No data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
