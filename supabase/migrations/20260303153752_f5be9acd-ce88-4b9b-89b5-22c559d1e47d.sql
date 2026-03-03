CREATE POLICY "Anyone can insert leads"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);