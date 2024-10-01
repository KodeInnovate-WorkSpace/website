import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MyDataTable({ data, collectionName }) {
  return collectionName === "property" ? (
    <PropertyTable tableData={data} />
  ) : (
    <PropertyTable tableData={data} />
  );
}

export const PropertyTable = ({ tableData }) => {
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
              <TableCell>{d.featured ? "Yes" : "No"}</TableCell>
              <TableCell className="text-right">{d.tag}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={9} className="text-center">
              No data available
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
