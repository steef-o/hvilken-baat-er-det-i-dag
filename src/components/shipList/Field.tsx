interface FieldProps {
  label: string;
  value: string;
  styles?: string;
}

const Field = ({ label, value, styles }: FieldProps) => (
  <div className={`px-4 py-2 ${styles}`}>
    <p className="font-mono uppercase">{label}</p>
    <h3 className="font-bold text-lg">{value}</h3>
  </div>
);

export default Field;
