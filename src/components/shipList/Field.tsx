interface FieldProps {
  label: string;
  value: string;
  styles?: string;
}

const Field = ({ label, value, styles }: FieldProps) => (
  <div className={`px-4 py-2 ${styles}`}>
    <p className="font-mono uppercase">{label}</p>
    <h3 className="text-lg font-bold">{value}</h3>
  </div>
);

export default Field;
