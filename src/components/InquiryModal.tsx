import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { cn } from '@/lib/utils';

const schema = z.object({
  budget: z.string().min(1, 'Please select a budget'),
  timeline: z.string().min(1, 'Please provide a timeline'),
  description: z.string().min(10, 'Please tell us a bit more about the scope'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { budget: '' },
  });

  const budget = watch('budget');

  const onSubmit = (data: FormData) => {
    console.log(data);
    setStep(3); // Success step
  };

  const nextStep = async () => {
    // Basic validation check before moving to step 2
    if (budget && watch('timeline') && watch('description')) {
      setStep(2);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-surface-dim/80 p-6 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="liquid-glass flex min-h-[600px] w-full max-w-4xl overflow-hidden rounded-xl"
        >
          {/* Left Side: Context */}
          <div className="hidden w-2/5 flex-col justify-between border-r border-white/5 bg-white/5 p-10 md:flex">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="status-orb" />
                <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                  Inquiry Mode
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-bold leading-tight text-on-surface">
                Let's craft your vision.
              </h2>
              <p className="font-mono text-base text-on-surface-variant opacity-80">
                We specialize in architectural precision and digital excellence. Tell us about your
                next landmark project.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative flex-1 p-10">
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-on-surface-variant transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col">
              {step !== 3 && (
                <div className="mb-12 flex gap-4">
                  <div
                    className={cn('h-1 flex-1 rounded-full transition-all duration-500', {
                      'bg-primary': step >= 1,
                      'bg-surface-bright': step < 1,
                    })}
                  />
                  <div
                    className={cn('h-1 flex-1 rounded-full transition-all duration-500', {
                      'bg-primary': step >= 2,
                      'bg-surface-bright': step < 2,
                    })}
                  />
                </div>
              )}

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-1 flex-col space-y-8"
                  >
                    <div>
                      <span className="mb-2 block font-mono text-sm uppercase text-on-surface-variant/60">
                        Step 01 / 02
                      </span>
                      <h3 className="text-3xl font-bold text-on-surface">Project Details</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="mb-2 block font-mono text-sm uppercase text-on-surface-variant">
                          What's the budget?
                        </label>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {['20k - 50k', '50k - 150k', '150k+'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setValue('budget', opt)}
                              className={cn(
                                'liquid-glass rounded px-4 py-3 font-mono text-sm transition-all hover:bg-white/10',
                                budget === opt
                                  ? 'border-primary text-primary'
                                  : 'border-white/10 text-on-surface'
                              )}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                        {errors.budget && (
                          <p className="mt-2 text-sm text-red-400">{errors.budget.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-2 block font-mono text-sm uppercase text-on-surface-variant">
                          Desired Timeline
                        </label>
                        <Input placeholder="e.g. 6 Months" {...register('timeline')} />
                        {errors.timeline && (
                          <p className="mt-2 text-sm text-red-400">{errors.timeline.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-2 block font-mono text-sm uppercase text-on-surface-variant">
                          Brief Description
                        </label>
                        <Textarea placeholder="Tell us about the scope..." {...register('description')} />
                        {errors.description && (
                          <p className="mt-2 text-sm text-red-400">{errors.description.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="pt-6">
                      <Button type="button" className="w-full" onClick={nextStep}>
                        NEXT STEP
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-1 flex-col space-y-8"
                  >
                    <div>
                      <span className="mb-2 block font-mono text-sm uppercase text-on-surface-variant/60">
                        Step 02 / 02
                      </span>
                      <h3 className="text-3xl font-bold text-on-surface">Contact Info</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="mb-2 block font-mono text-sm uppercase text-on-surface-variant">
                          Full Name
                        </label>
                        <Input placeholder="Alexander Wright" {...register('name')} />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-2 block font-mono text-sm uppercase text-on-surface-variant">
                          Email Address
                        </label>
                        <Input placeholder="alex@studio.com" type="email" {...register('email')} />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-2 block font-mono text-sm uppercase text-on-surface-variant">
                          Company
                        </label>
                        <Input placeholder="Design Collective" {...register('company')} />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-6">
                      <Button type="button" variant="outline" size="icon" onClick={() => setStep(1)}>
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <Button type="submit" className="flex-1">
                        SUBMIT PROJECT
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-1 flex-col items-center justify-center text-center space-y-8"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 scale-150 animate-pulse rounded-full bg-primary/20 blur-3xl" />
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <CheckCircle2 className="h-16 w-16 text-primary" />
                        <div className="status-orb absolute -right-1 -top-1" />
                      </div>
                    </div>
                    <div className="space-y-4 max-w-sm">
                      <h3 className="font-mono text-2xl font-bold uppercase tracking-tighter text-on-surface">
                        Transmission Received
                      </h3>
                      <p className="text-sm leading-relaxed text-on-surface-variant opacity-80 font-mono">
                        Your architecture parameters have been synchronized. Project initialization is now underway.
                      </p>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-6 pt-4">
                      <Button type="button" onClick={onClose} className="w-full max-w-[200px]">
                        CONTINUE
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
