import { TbCopy } from "react-icons/tb";
type CopyFieldProps = {
  label: string;
  value: string | number;
  onCopy: () => void;
  large?: boolean;
};

export default function CopyField({ label, value, onCopy, large }: CopyFieldProps) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium text-orange-400">{label}</span>
      </label>
      <div className="input-group">
        <input
          type="text"
          className={`input input-bordered flex-1 font-mono bg-base-200 ${large ? 'text-lg' : ''}`}
          value={value}
          readOnly
        />
        <button
          type="button"
          className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
          onClick={onCopy}
        >
          <TbCopy />
        </button>
      </div>
    </div>
  );
}
