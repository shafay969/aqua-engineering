import React, { useState } from 'react';
import { SERVICES, TIME_SLOTS } from '../types';
import { Check, Calendar, Clock, User, Mail, Phone, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export const Schedule: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>("plumbing_maintenance");
  const [selectedDate, setSelectedDate] = useState<number>(3); // day of month
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as any);
    } else if (currentStep === 3) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please fill in your name, email, and phone number to confirm your consultation.");
        return;
      }
      setIsSubmitted(true);
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as any);
    }
  };

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const calendarDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <section id="schedule" className="bg-[#F8FAFC] pt-8 pb-20 border-t border-gray-200/60 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] block mb-2">
            SCHEDULE
          </span>
          <h2 className="font-headline text-3xl md:text-5xl text-[#0F172A] font-bold">
            Begin Your Consultation
          </h2>
          <p className="text-[#45464d] text-base mt-2 max-w-lg mx-auto">
            Select your service requirements and choose a convenient time for an on-site technical evaluation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden transition-all">
          {/* Wizard Header Bar */}
          <div className="bg-[#f2f4f6] px-6 py-4 border-b border-gray-200/80">
            <div className="flex items-center justify-between max-w-lg mx-auto">
              {/* Step 1 */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => !isSubmitted && setCurrentStep(1)}>
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold transition-colors ${
                  currentStep >= 1 ? 'bg-[#2563EB] text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 1 ? <Check size={14} /> : 1}
                </span>
                <span className={`text-sm font-semibold hidden sm:inline ${currentStep >= 1 ? 'text-[#0F172A]' : 'text-gray-500'}`}>
                  Service
                </span>
              </div>

              <div className={`h-0.5 flex-grow mx-3 transition-colors ${currentStep >= 2 ? 'bg-[#2563EB]' : 'bg-gray-300'}`} />

              {/* Step 2 */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => !isSubmitted && setCurrentStep(2)}>
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold transition-colors ${
                  currentStep >= 2 ? 'bg-[#2563EB] text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > 2 ? <Check size={14} /> : 2}
                </span>
                <span className={`text-sm font-semibold hidden sm:inline ${currentStep >= 2 ? 'text-[#0F172A]' : 'text-gray-500'}`}>
                  Schedule
                </span>
              </div>

              <div className={`h-0.5 flex-grow mx-3 transition-colors ${currentStep >= 3 ? 'bg-[#2563EB]' : 'bg-gray-300'}`} />

              {/* Step 3 */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => !isSubmitted && setCurrentStep(3)}>
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold transition-colors ${
                  currentStep >= 3 ? 'bg-[#2563EB] text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep === 4 ? <Check size={14} /> : 3}
                </span>
                <span className={`text-sm font-semibold hidden sm:inline ${currentStep >= 3 ? 'text-[#0F172A]' : 'text-gray-500'}`}>
                  Confirm
                </span>
              </div>
            </div>
          </div>

          {/* Wizard Body */}
          <div className="p-6 sm:p-10">
            {/* STEP 1: SERVICE SELECTION */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="font-headline text-xl font-semibold text-[#0F172A] text-center">
                  Select Your Service
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((srv) => {
                    const isSelected = selectedService === srv.id;
                    return (
                      <button
                        key={srv.id}
                        onClick={() => setSelectedService(srv.id)}
                        className={`p-6 rounded-xl text-left transition-all duration-200 border-2 flex flex-col justify-between cursor-pointer relative ${
                          isSelected
                            ? 'border-[#2563EB] bg-blue-50/40 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <p className="font-bold text-[#0F172A] text-base">{srv.title}</p>
                            {isSelected && (
                              <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs">
                                <Check size={12} />
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1 leading-normal">{srv.description}</p>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mt-4 pt-2 border-t border-gray-100/80 block">
                          Est. Duration: 1 - 2 Hours
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: SCHEDULE DATE & TIME */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="text-center">
                  <h3 className="font-headline text-xl font-semibold text-[#0F172A]">
                    Select Date & Time
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Showing available slots for October 2026</p>
                </div>

                {/* Calendar View */}
                <div>
                  <div className="grid grid-cols-7 gap-2 text-center font-semibold text-xs text-gray-500 mb-3">
                    {daysOfWeek.map((day, idx) => <span key={idx}>{day}</span>)}
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {calendarDays.map((day, idx) => {
                      const isPrevMonth = idx < 2;
                      const isSelected = !isPrevMonth && selectedDate === day;
                      return (
                        <button
                          key={idx}
                          disabled={isPrevMonth}
                          onClick={() => setSelectedDate(day)}
                          className={`h-11 rounded-xl text-sm font-semibold transition-all flex items-center justify-center cursor-pointer ${
                            isPrevMonth
                              ? 'text-gray-300 cursor-not-allowed bg-transparent'
                              : isSelected
                              ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20 scale-105'
                              : 'text-gray-800 hover:bg-gray-100 bg-gray-50 border border-gray-200/60'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                    <Clock size={14} className="text-[#2563EB]" />
                    Available Arrival Windows
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIME_SLOTS.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                            isSelected
                              ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-sm'
                              : 'border-gray-200 hover:border-gray-300 bg-white text-[#0F172A]'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT INFORMATION */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="font-headline text-xl font-semibold text-[#0F172A] text-center">
                  Final Details & Property Location
                </h3>
                
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-4 flex items-center justify-between text-xs text-gray-700">
                  <span>
                    <strong className="text-[#0F172A] block">Selected Slot:</strong>
                    Oct {selectedDate}, 2026 @ {selectedTime}
                  </span>
                  <span className="text-right">
                    <strong className="text-[#0F172A] block">Service:</strong>
                    {SERVICES.find(s => s.id === selectedService)?.title}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">FULL NAME *</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Dr. Alexander Wright"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">EMAIL ADDRESS *</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="alex.wright@architecture.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">PHONE NUMBER *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 019-2834"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">PROPERTY ADDRESS / NOTES</label>
                    <textarea 
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="High-rise penthouse #402. Gate code: #8821. Water pressure fluctuation observed in primary suite."
                      className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS CONFIRMATION */}
            {currentStep === 4 && (
              <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle size={36} />
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#0F172A]">
                    Consultation Confirmed
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-[#0F172A]">{formData.fullName}</strong>. A licensed Master Water Engineer has been assigned to your booking.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-md mx-auto text-left text-xs space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service:</span>
                    <span className="font-bold text-[#0F172A]">{SERVICES.find(s => s.id === selectedService)?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Scheduled For:</span>
                    <span className="font-bold text-[#0F172A]">October {selectedDate}, 2026 @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Confirmation Sent To:</span>
                    <span className="font-bold text-[#2563EB]">{formData.email}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setFormData({ fullName: "", email: "", phone: "", address: "", notes: "" });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] hover:underline cursor-pointer"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {currentStep < 4 && (
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-600 hover:text-[#0F172A] px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#2563EB] text-white px-8 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 active:scale-95 cursor-pointer ml-auto"
                >
                  {currentStep === 3 ? "Confirm Booking" : "Continue"}
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {currentStep < 4 && (
              <p className="text-center text-[11px] text-gray-400 font-medium mt-6 uppercase tracking-wider">
                Availability Guarantee: Master Engineer Within 48 Hours
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
