const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-4">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-border" />
        <div className="absolute inset-0 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      </div>
      <p className="text-sm text-muted-foreground font-medium">
        Loading rates...
      </p>
    </div>
  )
}

export default Loading
