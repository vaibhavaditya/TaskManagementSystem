export const asyncHandler = (handleledFn)=>{
    return (req,res,next)=>{
        Promise.resolve(handleledFn(req,res,next)).catch(next);
    }
}