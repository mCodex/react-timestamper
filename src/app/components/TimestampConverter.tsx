'use client';

import CopyField from "./common/CopyField";
import ResultSection from "./common/ResultSection";
import { useTimestampController, type TimestampController } from "../useController";
import { timestampSchema } from "../schemas/timestamp";

type Props = { controller?: TimestampController };

export default function TimestampConverter({ controller }: Props) {
  const fallback = useTimestampController();
  const { 
    form, 
    convertedDate, 
    convertedDateLocal, 
    relativeTime, 
    copyToClipboard,
  } = controller ?? fallback;

  return (
    <div className="space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field
          name="timestamp"
          validators={{
            onChange: ({ value }) => {
              const result = timestampSchema.shape.timestamp.safeParse(value);
              return result.success ? undefined : result.error.issues[0]?.message;
            },
          }}
        >
          {(field) => (
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-orange-400">
                  Enter Timestamp (seconds or milliseconds)
                </span>
              </label>
              <input
                type="text"
                placeholder="1754854149"
                className={`input input-bordered w-full font-mono text-lg bg-base-200 ${
                  field.state.meta.errors.length > 0 ? 'input-error' : ''
                }`}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              {field.state.meta.errors.length > 0 && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {field.state.meta.errors[0]}
                  </span>
                </label>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="btn bg-orange-500 hover:bg-orange-600 border-orange-500 text-white btn-block btn-lg"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Convert'
              )}
            </button>
          )}
        </form.Subscribe>
      </form>

      {/* Results */}
      {convertedDate && (
        <ResultSection>
          <CopyField
            label="Date (UTC)"
            value={convertedDate}
            onCopy={() => copyToClipboard(convertedDate, 'Converted Date (UTC)')}
          />

          <CopyField
            label="Date (Local)"
            value={convertedDateLocal}
            onCopy={() => copyToClipboard(convertedDateLocal, 'Converted Date (Local)')}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-orange-400">Relative Time</span>
            </label>
            <input 
              type="text" 
              className="input input-bordered font-mono bg-base-200" 
              value={relativeTime}
              readOnly
            />
          </div>
        </ResultSection>
      )}

  {/* Toast rendering centralized in page */}
    </div>
  );
}
