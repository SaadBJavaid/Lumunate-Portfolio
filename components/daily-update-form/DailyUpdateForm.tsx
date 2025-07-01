"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dailyUpdatesSchema, DailyUpdate } from "@/types/dailyUpdatesSchema";
import { useSubmitUpdate } from "@/hooks/useSubmitUpdate";
import { useEffect } from "react";

export default function DailyUpdateForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DailyUpdate>({
    resolver: zodResolver(dailyUpdatesSchema),
  });

  const { mutate, isPending, isSuccess, error } = useSubmitUpdate();

  // Get userId & name from URL (assuming Slack passes ?userId=...&name=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId") || "";
    const name = params.get("name") || "";
    setValue("userId", userId);
    setValue("name", name);
  }, [setValue]);

  const onSubmit = (data: DailyUpdate) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-xl font-semibold">Submit Your Daily Update</h2>

      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("name")} />

      <div>
        <label className="block font-medium">Daily Update</label>
        <textarea
          {...register("update")}
          className="w-full p-2 border rounded"
          rows={5}
          placeholder="Write your update here..."
        />
        {errors.update && <p className="text-red-500 text-sm">{errors.update.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit Update"}
      </button>

      {isSuccess && <p className="text-green-600">✅ Update submitted successfully!</p>}
      {error && <p className="text-red-500">❌ Submission failed. Try again.</p>}
    </form>
  );
}