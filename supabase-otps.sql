-- 6. Create OTPs table for verification
CREATE TABLE IF NOT EXISTS public.otps (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    phone TEXT NOT NULL,
    otp TEXT NOT NULL
);

-- 7. Enable RLS on otps table
ALTER TABLE public.otps ENABLE ROW LEVEL SECURITY;

-- 8. Allow service role to manage otps (API routes use service role)
-- We don't need public policies for otps because we'll access it via API routes using the service role key.
