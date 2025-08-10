'use client';

import { TbCopy } from "react-icons/tb";
import { useTimestampController } from "../useController";
import { timestampSchema } from "../schemas/timestamp";

export default function TimestampConverter() {
  const { 
    form, 
    convertedDate, 
    convertedDateLocal, 
    relativeTime, 
    copyToClipboard,
    copySuccess 
  } = useTimestampController();

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
        <div className="mt-8 space-y-4">
          <div className="divider text-orange-400">Result</div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-orange-400">Date (UTC)</span>
            </label>
            <div className="input-group">
              <input 
                type="text" 
                className="input input-bordered flex-1 font-mono bg-base-200" 
                value={convertedDate}
                readOnly
              />
              <button 
                className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
                onClick={() => copyToClipboard(convertedDate, 'Converted Date (UTC)')}
              >
                <TbCopy />
              </button>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-orange-400">Date (Local)</span>
            </label>
            <div className="input-group">
              <input 
                type="text" 
                className="input input-bordered flex-1 font-mono bg-base-200" 
                value={convertedDateLocal}
                readOnly
              />
              <button 
                className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
                onClick={() => copyToClipboard(convertedDateLocal, 'Converted Date (Local)')}
              >
                <TbCopy />
              </button>
            </div>
          </div>

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
        </div>
      )}

      {/* Copy Success Toast */}
      {copySuccess && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>{copySuccess}</span>
          </div>
        </div>
      )}
    </div>
  );
}
